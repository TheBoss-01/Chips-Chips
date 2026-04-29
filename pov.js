/* POV Casino Background — shared canvas renderer */
function drawCasinoPOV(canvas, type) {
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  ctx.clearRect(0,0,W,H);

  if(type==='table'){
    // Ceiling
    const cg=ctx.createLinearGradient(0,0,0,H*0.22);
    cg.addColorStop(0,'#050308');cg.addColorStop(1,'#0f0a18');
    ctx.fillStyle=cg;ctx.fillRect(0,0,W,H*0.22);
    // Chandeliers
    [0.25,0.5,0.75].forEach(p=>{
      const cx=W*p,cy=H*0.2;
      ctx.fillStyle='#2a2030';
      ctx.fillRect(~~(cx-2),0,4,~~(cy-6));
      ctx.beginPath();ctx.ellipse(~~cx,~~cy,16,7,0,0,Math.PI*2);
      ctx.fillStyle='#3a2a50';ctx.fill();
      ctx.shadowColor='rgba(255,220,100,0.9)';ctx.shadowBlur=28;
      ctx.beginPath();ctx.arc(~~cx,~~cy,5,0,Math.PI*2);
      ctx.fillStyle='#ffe870';ctx.fill();
      ctx.shadowBlur=0;
      const lg=ctx.createRadialGradient(cx,cy,0,cx,cy,W*0.2);
      lg.addColorStop(0,'rgba(255,220,80,0.12)');lg.addColorStop(1,'transparent');
      ctx.fillStyle=lg;ctx.fillRect(0,0,W,H);
    });
    // Casino hall
    const hg=ctx.createLinearGradient(0,H*0.22,0,H*0.5);
    hg.addColorStop(0,'#12090e');hg.addColorStop(1,'#0d0a0a');
    ctx.fillStyle=hg;ctx.fillRect(0,~~(H*0.22),W,~~(H*0.28));

    // Background dark tables
    [0.12,0.88,0.3,0.7].forEach((p,i)=>{
      ctx.globalAlpha=0.3;
      ctx.fillStyle='#0e3a18';
      ctx.beginPath();
      ctx.ellipse(~~(W*p),~~(H*0.35+i%2*H*0.06),~~(W*0.08),~~(H*0.05),0,0,Math.PI*2);
      ctx.fill();ctx.globalAlpha=1;
    });
    // Slot machines edges
    [[6,H*0.24,'#7c3aed'],[W-36,H*0.24,'#7c3aed'],
     [6,H*0.36,'#5b21b6'],[W-36,H*0.36,'#5b21b6']].forEach(([sx,sy,sc])=>{
      ctx.globalAlpha=0.38;
      ctx.fillStyle='#1a0a3e';ctx.fillRect(sx,~~sy,30,50);
      ctx.strokeStyle=sc;ctx.lineWidth=2;ctx.strokeRect(sx,~~sy,30,50);
      ctx.fillStyle='#0a0010';ctx.fillRect(sx+3,~~(sy+6),24,18);
      ctx.globalAlpha=1;
    });
    // Green felt (table surface)
    const tableY=H*0.5;
    const fg=ctx.createLinearGradient(0,tableY,0,H);
    fg.addColorStop(0,'#2aaa48');fg.addColorStop(0.4,'#1e8838');fg.addColorStop(1,'#0a3018');
    ctx.fillStyle=fg;ctx.fillRect(0,~~tableY,W,~~(H-tableY));

    // Wood rail
    const rg=ctx.createLinearGradient(0,tableY,0,tableY+18);
    rg.addColorStop(0,'#c8a060');rg.addColorStop(1,'#6a3810');
    ctx.fillStyle=rg;ctx.fillRect(0,~~tableY,W,18);
    ctx.strokeStyle='#8b5e1a';ctx.lineWidth=3;ctx.strokeRect(0,~~tableY,W,18);
    ctx.fillStyle='rgba(255,255,255,0.12)';ctx.fillRect(0,~~tableY,W,3);
    // Chip stacks on table (near player)
    const chipC=['#c0392b','#2980b9','#27ae60','#ffd700','#8e44ad'];
    [W*0.06,W*0.12,W*0.88,W*0.94].forEach((cx,ci)=>{
      for(let i=0;i<5;i++){
        ctx.fillStyle=chipC[(ci+i)%5];ctx.fillRect(~~(cx-10),~~(tableY+22+i*4),20,5);
        ctx.strokeStyle='rgba(0,0,0,0.4)';ctx.lineWidth=1;ctx.strokeRect(~~(cx-10),~~(tableY+22+i*4),20,5);
      }
    });
    // Vignette
    const vg=ctx.createRadialGradient(W/2,H/2,H*0.28,W/2,H/2,H*0.8);
    vg.addColorStop(0,'transparent');vg.addColorStop(1,'rgba(0,0,0,0.55)');
    ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);

  } else if(type==='slots'){
    const floorY=H*0.55;
    // Ceiling
    ctx.fillStyle='#050308';ctx.fillRect(0,0,W,~~(H*0.2));
    // Neon strip light
    ctx.shadowColor='rgba(200,180,255,0.9)';ctx.shadowBlur=18;
    ctx.fillStyle='rgba(220,200,255,0.7)';ctx.fillRect(~~(W*0.1),8,~~(W*0.8),5);
    ctx.shadowBlur=0;
    // Casino hall bg
    const bg=ctx.createLinearGradient(0,H*0.2,0,floorY);
    bg.addColorStop(0,'#0a080e');bg.addColorStop(1,'#120a18');
    ctx.fillStyle=bg;ctx.fillRect(0,~~(H*0.2),W,~~(floorY-H*0.2));
    // Background slot machines
    [0.05,0.18,0.32,0.68,0.82,0.95].forEach((p,i)=>{
      const scale=0.48+i%2*0.06;
      const mx=W*p,my=H*0.22;
      const mw=~~(38*scale),mh=~~(65*scale);
      ctx.globalAlpha=0.38;
      ctx.fillStyle='#1a0a3e';ctx.fillRect(~~(mx-mw/2),~~my,mw,mh);
      ctx.strokeStyle='#7c3aed';ctx.lineWidth=2;ctx.strokeRect(~~(mx-mw/2),~~my,mw,mh);
      ctx.fillStyle='#0a0010';ctx.fillRect(~~(mx-mw/2+2),~~(my+5),mw-4,~~(mh*0.38));
      ctx.shadowColor='rgba(150,50,255,0.6)';ctx.shadowBlur=12;
      ctx.fillStyle='rgba(150,50,255,0.12)';ctx.fillRect(~~(mx-mw/2),~~my,mw,mh);
      ctx.shadowBlur=0;ctx.globalAlpha=1;
    });
    // Carpet floor
    const fg=ctx.createLinearGradient(0,floorY,0,H);
    fg.addColorStop(0,'#6e0e0e');fg.addColorStop(1,'#3a0505');
    ctx.fillStyle=fg;ctx.fillRect(0,~~floorY,W,~~(H-floorY));
    // Diamond pattern removed to avoid rendering lines
    ctx.fillStyle='#2a0808';ctx.fillRect(0,~~floorY,W,7);
    // Vignette
    const vg=ctx.createRadialGradient(W/2,H*0.5,H*0.18,W/2,H*0.5,H*0.75);
    vg.addColorStop(0,'transparent');vg.addColorStop(1,'rgba(0,0,0,0.72)');
    ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
  }
}

// Install POV background on a game page
// Call after DOMContentLoaded: installPOV('table') or installPOV('slots')
function installPOV(type) {
  const gameMain = document.querySelector('.game-main');
  if(!gameMain) return;
  const cv = document.createElement('canvas');
  cv.id = 'pov-canvas';
  cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;';
  gameMain.style.position = 'relative';
  gameMain.style.overflow = 'hidden';
  gameMain.insertBefore(cv, gameMain.firstChild);
  // Make game content sit above canvas
  Array.from(gameMain.children).forEach(c=>{
    if(c!==cv) { c.style.position='relative'; c.style.zIndex='1'; }
  });
  function sizePOV(){cv.width=gameMain.clientWidth;cv.height=gameMain.clientHeight;drawCasinoPOV(cv,type);}
  sizePOV();
  window.addEventListener('resize', sizePOV);
}
