import FreeShippingIcon from "../../assets/icons/free-shipping.png";
import MoneyReturnIcon from "../../assets/icons/money-return.png";
import CustomerSupportIcon from "../../assets/icons/customer-support.png";

function Services() {
  const service = [
    { title: "Free shopping", description: "order over $200", icon: FreeShippingIcon },
    { title: "Money Returns", description: "30 Days money return", icon: MoneyReturnIcon },
    { title: "Customer Support", description: "24h customer support", icon: CustomerSupportIcon},
  ];
  return (
    <div className="container py-16">
      <div className="w-10/12  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto justify-center">
        {service.map((item) => (
          <div
            className="border border-primary rounded-sm px-3 py-4 flex justify-center items-center gap-3"
            key={item.title}
          >
            <img
              src={item.icon}
              alt="icon"
              className="w-12 h-12 object-cover"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
