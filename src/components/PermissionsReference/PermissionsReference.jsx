import React, {useMemo, useState} from 'react';
import styles from './PermissionsReference.module.css';
import permissions from './permissions.json';

const versions = ['6.2.0.11', '6.3.0.0', '6.4.0.0'];
const riskOrder = ['Low', 'Moderate', 'High', 'Critical'];
function compareVersions(a,b) {
  const aa=(a||'').split('.').map(Number), bb=(b||'').split('.').map(Number);
  for(let i=0;i<Math.max(aa.length,bb.length);i++){
    const delta=(aa[i]||0)-(bb[i]||0);
    if(delta!==0)return delta;
  }
  return 0;
}
export default function PermissionsReference() {
  const [query,setQuery]=useState('');
  const [category,setCategory]=useState('All');
  const [access,setAccess]=useState('All');
  const [module,setModule]=useState('All');
  const [risk,setRisk]=useState('All');
  const [version,setVersion]=useState('All');
  const [expanded,setExpanded]=useState(null);
  const [group,setGroup]=useState('default');
  const [copied,setCopied]=useState(null);
  const categories=useMemo(()=>[...new Set(permissions.map(p=>p.category))].sort(),[]);
  const modules=useMemo(()=>[...new Set(permissions.map(p=>p.module||'Unspecified'))].sort((a,b)=>a==='Core'?-1:b==='Core'?1:a.localeCompare(b)),[]);
  const filtered=useMemo(()=>permissions.filter(p=>
    (category==='All'||p.category===category) &&
    (access==='All'||p.access===access) &&
    (module==='All'||(p.module||'Unspecified')===module) &&
    (risk==='All'||p.risk===risk) &&
    (version==='All'||compareVersions(p.since,version)<=0) &&
    `${p.node} ${p.description} ${p.category} ${p.module||''} ${p.since||''} ${(p.parentGroups||[]).join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())
  ),[query,category,access,module,risk,version]);
  async function copy(value,node) {
    try {await navigator.clipboard.writeText(value);setCopied(node);}
    catch {setCopied(null);}
  }
  return <div className={styles.reference}>
    <p className={styles.riskNotice}>Risk levels are not a guarantee that a permission node is completely safe.</p>
    <div className={styles.filters}>
      <label className={styles.searchLabel}>Search permissions
        <input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search node, description, module, or parent group…" />
      </label>
      <div className={styles.filterGrid}>
        <label>Category
          <select value={category} onChange={e=>setCategory(e.target.value)}>
            <option value="All">All categories</option>{categories.map(c=><option key={c}>{c}</option>)}
          </select>
        </label>
        <label>Access
          <select value={access} onChange={e=>setAccess(e.target.value)}>
            <option value="All">All access</option><option>Player</option><option>Admin</option>
          </select>
        </label>
        <label>Risk level
          <select value={risk} onChange={e=>setRisk(e.target.value)}>
            <option value="All">All risk levels</option>{riskOrder.map(r=><option key={r}>{r}</option>)}
          </select>
        </label>
        <label>Module
          <select value={module} onChange={e=>setModule(e.target.value)}>
            <option value="All">All modules</option>{modules.map(m=><option key={m} value={m}>{m}</option>)}
          </select>
        </label>
        <label>QuickShop-Hikari Version
          <select value={version} onChange={e=>setVersion(e.target.value)}>
            <option value="All">All versions</option>{versions.map(v=><option key={v}>{v}</option>)}
          </select>
        </label>
      </div>
    </div>
    <section className={styles.riskLegend} aria-label="Risk level key">
      <div className={styles.riskLegendTitle}>Risk level key</div>
      <div className={styles.riskLegendGrid}>
        <div className={styles.riskLegendItem}><span className={styles.riskBadge} data-risk="Low">Low</span><span>Normal player features</span></div>
        <div className={styles.riskLegendItem}><span className={styles.riskBadge} data-risk="Moderate">Moderate</span><span>Shop management changes</span></div>
        <div className={styles.riskLegendItem}><span className={styles.riskBadge} data-risk="High">High</span><span>Elevated access or bypasses</span></div>
        <div className={styles.riskLegendItem}><span className={styles.riskBadge} data-risk="Critical">Critical</span><span>Sensitive or destructive actions</span></div>
      </div>
    </section>
    <div className={styles.toolbar}><span>{filtered.length} of {permissions.length} permissions</span>
      <button type="button" onClick={()=>{setQuery('');setCategory('All');setAccess('All');setModule('All');setRisk('All');setVersion('All');setExpanded(null);}}>Reset filters</button>
    </div>
    <div className={styles.entries}>{filtered.map(p=>{
      const isOpen=expanded===p.node;
      const cmd=`/lp group ${group.trim()||'default'} permission set ${p.node} true`;
      const isBundle=p.node==='quickshop.player'||p.node==='quickshop.moderator';
      const children=isBundle?permissions.filter(item=>(item.parentGroups||[]).includes(p.node)):[];
      return <article className={styles.entry} key={p.node}>
        <button type="button" className={styles.entryHeader} aria-expanded={isOpen} onClick={()=>setExpanded(isOpen?null:p.node)}>
          <span className={styles.entryMain}><code>{p.node}</code><span className={styles.description}>{p.description}</span>{p.reviewRequired&&<strong className={styles.review}>Needs review</strong>}
            <span className={styles.meta}>Since: <strong>{p.since||'Unknown'}</strong><span aria-hidden="true"> · </span>{p.category}<span aria-hidden="true"> · </span>{p.access}<span aria-hidden="true"> · </span>Default: {p.default}<span aria-hidden="true"> · </span>{p.module}</span>
            <span className={styles.permissionBadges}>
              <span className={styles.riskBadge} data-risk={p.risk}>{p.risk} risk</span>
              {(p.parentGroups||[]).map(parent=><span key={parent} className={styles.parentBadge} title={`Included in ${parent}`}>{parent}</span>)}
            </span>
          </span><span aria-hidden="true">{isOpen?'−':'+'}</span>
        </button>
        {isOpen&&<div className={styles.details}>
          <div className={styles.detailsGrid}><div><small>Introduced in</small><strong>{p.since?`QSH ${p.since}`:'Not yet verified'}</strong></div>
            <div><small>Default</small><strong>{p.default==='op'?'Operator (OP)':p.default}</strong></div>
            <div><small>Access category</small><strong>{p.access}</strong></div>
            <div><small>Risk level</small><strong>{p.risk}</strong></div>
            <div><small>Module</small><strong>{p.module||'Unspecified'}</strong></div></div>
          {isBundle && children.length>0 && <div className={styles.relationships}>
            <strong>Includes</strong>
            <div className={styles.relationshipList}>{children.map(c=><code key={c.node}>{c.node}</code>)}</div>
          </div>}
          {p.reviewRequired&&<p className={styles.review}>Description or behavior needs manual review in permissions.json.</p>}
          <label className={styles.groupInput}>LuckPerms group <input value={group} onChange={e=>setGroup(e.target.value)} aria-label="LuckPerms group" /></label>
          <div className={styles.command}><code>{cmd}</code><button type="button" onClick={()=>copy(cmd,p.node)}>{copied===p.node?'Copied':'Copy'}</button></div>
        </div>}
      </article>;
    })}</div>
    {filtered.length===0&&<p className={styles.empty}>No matching permissions. Try a different search or filter.</p>}
  </div>;
}
