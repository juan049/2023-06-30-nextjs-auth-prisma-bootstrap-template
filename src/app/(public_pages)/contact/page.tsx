export default function ContactPage(props) {
  return (
    <>
      <main className="container">
        <h3 className="text-center">Contactanos</h3>
        <strong className="text-center">Queremos saber tu opinión</strong>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-envelope"></i> Email : email@email.com
          </li>
          <li className="list-group-item">
            <i className="bi bi-telephone-fill"></i> Telefono : 461-XXXX-XXX
          </li>
        </ul>
      </main>
    </>
  );
}
