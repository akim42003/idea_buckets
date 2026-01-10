import{f as i,a}from"./NpXMEJIl.js";import"./_9sQC3Eu.js";import{K as r,$ as c,n as m}from"./iVpnHah-.js";import{h as d}from"./Df7h8xnJ.js";const p={description:"Notes from Faulkenberry's Bayesian Statistics the basics",title:"Bayesian Statistics",meta:[{name:"description",content:"Notes from Faulkenberry's Bayesian Statistics the basics"}]};var u=i(`<meta name="description" content="Notes from Faulkenberry's Bayesian Statistics the basics"/>`),h=i(`<h2>Introduction</h2> <p>These notes come from the aforementioned handbook. It's mostly conceptual intuition since the
mathematical formulation can be found online.</p>`,1);function f(e){var t=h();d("3w0rto",n=>{var o=u();r(()=>{c.title="Bayesian Statistics"}),a(n,o)}),m(2),a(e,t)}const g=Object.freeze(Object.defineProperty({__proto__:null,default:f,metadata:p},Symbol.toStringTag,{value:"Module"})),v={description:"Quick overview of how modern CDSR models work",title:"Cross-Domain Sequential Recommendation",meta:[{name:"description",content:"Quick overview of how modern CDSR models work"}]};var b=i('<meta name="description" content="Quick overview of how modern CDSR models work"/>'),_=i(`<p>These days CDSR models are Transformer based and use cross-attention to handle heterogeneous
behavioral sequences. Recall that in general there are domain specific encoders for each
sequence domain which output domain specific embeddings to the cross-attention module. They are
then processed into the target sequence and subsequently used to make predictions.</p> <p>During training, loss is definined in the target domain and propagated backward through the
cross-attention module. In this sense, we can think of cross-attention training as the alignment
across domains since it takes multiple domains, and learns relevant relationships between them
to output a single semantically relevant sequence for prediction.</p> <p>At a high level, here's an architecture example:</p> <pre>
Domain A Sequence ──&gt; Encoder A ──
                                  │
Domain B Sequence ──&gt; Encoder B ──┼──&gt; Cross-Attention ─&gt;Target Sequence ─&gt; Prediction Head
                                  │
Domain C Sequence ──&gt; Encoder C ──
</pre> <p>In CDSR, cross-attention does not merge sequences into a joint timeline.
Instead, it conditions the target-domain sequence on auxiliary-domain behavior,
and alignment emerges because only information that improves target-domain prediction is reinforced during training</p>`,1);function y(e){var t=_();d("1fnjdkh",n=>{var o=b();r(()=>{c.title="Cross-Domain Sequential Recommendation"}),a(n,o)}),m(8),a(e,t)}const S=Object.freeze(Object.defineProperty({__proto__:null,default:y,metadata:v},Symbol.toStringTag,{value:"Module"})),l=Object.assign({"/src/content/primers/bayesian-stats.sveltex":g,"/src/content/primers/cross-domain-sequential-recommendation.sveltex":S}),k=Object.entries(l),q=k.map(e=>{const t=e[0],n=e[1],o=t.split("/").pop();let s="";return o&&(s=o.replace(".sveltex","")),{slug:s,title:n.metadata.title,description:n.metadata.description}});q.sort((e,t)=>e.title.localeCompare(t.title));const B=e=>l[`/src/content/primers/${e}.sveltex`];export{B as a,q as p};
