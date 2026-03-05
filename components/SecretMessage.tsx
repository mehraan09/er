export default function SecretMessage({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-5"
      style={{ background: "rgba(45,27,46,0.25)", backdropFilter: "blur(10px)", cursor: "none" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative rounded-[28px] px-11 py-14 max-w-[480px] w-full text-center"
        style={{ background: "#fffdf9", boxShadow: "0 40px 100px rgba(181,101,167,0.25), 0 0 0 1.5px #f0bdd0" }}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-glow-ring" />
        <button onClick={onClose} style={{ position:"absolute", top:16, right:20, background:"none", border:"none", fontSize:22, cursor:"none", color:"#b565a7", transition:"transform .2s" }}>✕</button>
        <div className="text-5xl mb-4">💌</div>
        <h3 className="mb-6" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:28, fontWeight:300, fontStyle:"italic", color:"#2d1b2e" }}>Secret Message</h3>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontStyle:"italic", fontWeight:300, color:"#6b4468", lineHeight:2, whiteSpace:"pre-line" }}>
          "{message}"
        </p>
      </div>
    </div>
  );
}
