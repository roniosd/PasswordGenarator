(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const a=document.getElementById("uppercase"),u=document.getElementById("lowerCase"),m=document.getElementById("number"),f=document.getElementById("specialChar"),d=document.getElementById("displayBox");document.getElementById("Generate").addEventListener("click",()=>{const r=a.checked?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":"",o=u.checked?"abcdefghijklmnopqrstuvwxyz":"",l=m.checked?"1234567890":"",n=f.checked?"!@#$%^&*()_+[]{}|;:,.<>?":"",e=r+o+l+n;if(!e.length)alert("Please Select One");else{let t="";for(let c=1;c<=18;c++){let i=Math.floor(Math.random()*e.length);t+=e[i]}d.value=t,document.getElementById("boxes").style.display="block"}});const p=document.getElementById("copubtn"),s=document.getElementById("copyIcon");p.addEventListener("click",r=>{r.preventDefault(),navigator.clipboard.writeText(d.value).then(()=>{s.classList.remove("fa-copy"),s.classList.add("fa-check"),setTimeout(()=>{s.classList.remove("fa-check"),s.classList.add("fa-copy")},2000)})});
