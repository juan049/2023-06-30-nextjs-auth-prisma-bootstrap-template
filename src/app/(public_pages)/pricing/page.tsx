interface plan {
  name: String;
  description: String;
  price: Number;
}

const plans: plan[] = [
  {
    name: "Plan Basico",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam rerum ullam error. Necessitatibus ipsam fuga dolorum quas hic? Sint repudiandae doloribus nostrum voluptatem exercitationem nisi quae libero, ea minima!",
    price: 99.2,
  },
  {
    name: "Plan Profesional",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam rerum ullam error. Necessitatibus ipsam fuga dolorum quas hic? Sint repudiandae doloribus nostrum voluptatem exercitationem nisi quae libero, ea minima!",
    price: 500,
  },
  {
    name: "Plan Premium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam rerum ullam error. Necessitatibus ipsam fuga dolorum quas hic? Sint repudiandae doloribus nostrum voluptatem exercitationem nisi quae libero, ea minima!",
    price: 1000,
  },
];

export default function PricingPage(props) {
  return (
    <>
      <main className="container">
        <h3 className="text-center">Nustros planes</h3>
        <div className="row">
          {plans.map((plan) => {
            return (
              <div className="col-sm-12 col-md-4 g-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-center">{plan.name}</h5>
                    <p className="card-text">{plan.description}</p>
                    <p className="text-center fw-bold fs-3 text-success">
                      $ {plan.price.toString()}/mes
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
