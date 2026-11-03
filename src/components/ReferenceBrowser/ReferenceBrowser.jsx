import React, {useMemo,useState} from 'react';
import styles from './ReferenceBrowser.module.css';

export default function ReferenceBrowser({kind,data}) {
 const [search,setSearch]=useState('');
 const [category,setCategory]=useState('All');
 const [access,setAccess]=useState('All');
 const [expanded,setExpanded]=useState(null);
 const categories=useMemo(()=>['All',...new Set(data.map(x=>kind==='commands'?x.access:x.section))].sort((a,b)=>a==='All'?-1:b==='All'?1:a.localeCompare(b)),[data,kind]);
 const filtered=useMemo(()=>data.filter(x=>{
  const c=kind==='commands'?x.access:x.section;
  return (category==='All'||category===c)&&JSON.stringify(x).toLowerCase().includes(search.toLowerCase());
 }),[data,search,category,kind]);
 return <div className={styles.browser}>
  <div className={styles.filters}>
   <label>Search<input value={search} onChange={e=>setSearch(e.target.value)} placeholder={kind==='commands'?'Search commands and descriptions':'Search configuration keys and comments'}/></label>
   <label>{kind==='commands'?'Access':'Section'}<select value={category} onChange={e=>setCategory(e.target.value)}>{categories.map(c=><option key={c}>{c}</option>)}</select></label>
  </div>
  <div className={styles.count}>{filtered.length} of {data.length} {kind==='commands'?'commands':'settings'} <button onClick={()=>{setSearch('');setCategory('All')}}>Reset filters</button></div>
  <div className={styles.results}>{filtered.map(item=>{
   const id=kind==='commands'?item.name:item.key;
   const open=expanded===id;
   return <article key={id} className={styles.card}>
    <button className={styles.cardHeader} onClick={()=>setExpanded(open?null:id)} aria-expanded={open}>
      <span><code>{kind==='commands'?item.usage:item.key}</code><span className={styles.desc}>{item.description||'Description not available.'}</span></span><span aria-hidden="true">{open?'−':'+'}</span>
    </button>
    {open&&<div className={styles.details}>
     {kind==='commands'?<>
       <div><strong>Command</strong><code>{item.usage}</code></div>
       <div><strong>Audience</strong><span>{item.access} (reference classification)</span></div>
       <div><strong>Related permission nodes</strong>{item.permissions.length?<div className={styles.pills}>{item.permissions.map(p=><code key={p}>{p}</code>)}</div>:<span>Not established from the language description.</span>}</div>
       <p className={styles.note}>Command descriptions come from the English language file. Exact arguments and required permission checks should be confirmed against the command implementation before granting access.</p>
     </>:<>
       <div><strong>Configured default</strong><code>{typeof item.default==='string'?item.default:JSON.stringify(item.default)}</code></div>
       <div><strong>Section</strong><span>{item.section}</span></div>
       {item.reviewRequired&&<p className={styles.note}>This setting has no nearby explanatory comment in the supplied configuration.</p>}
     </>}
    </div>}
   </article>;
  })}</div>
  {!filtered.length&&<p>No matching entries.</p>}
 </div>;
}
