import "./TopBarMarquee.css";

export default function TopBar() {
  return (
    <div className="mc-topbar" dir="ltr">
      <div className="mc-topbar-track">
        <div className="mc-topbar-item">✓ <strong>Produits 100% authentiques</strong></div>
        <div className="mc-topbar-item">✓ Livraison rapide partout au Maroc</div>
        <div className="mc-topbar-item">✓ Service client réactif</div>

        {/* duplicate for smooth infinite scroll */}
        <div className="mc-topbar-item">✓ <strong>Produits 100% authentiques</strong></div>
        <div className="mc-topbar-item">✓ Livraison rapide partout au Maroc</div>
        <div className="mc-topbar-item">✓ Service client réactif</div>
      </div>
    </div>
  );
}