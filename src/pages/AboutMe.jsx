import React from 'react';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import placeholderuser from '../images/placeholderuser.jpg';

const contacts = [
  {
    id: 1,
    name: 'Your Address, Your City, Your Country',
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: 'email@domain.com',
    icon: <FiMail />,
  },
  {
    id: 3,
    name: '555 8888 888',
    icon: <FiPhone />,
  },
];
function About() {
  return (
    <div className="container mx-auto">
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img src={placeholderuser} className="rounded-lg w-96" alt="" />
        </div>
        <div className="font-nunito-regular w-full sm:w-3/4 text-left">
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
            dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
            consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati,
            voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa
            deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos
            culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque
            consequatur earum
          </p>
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores
            dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque
            consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10">
        <div className="w-full lg:w-1/2">
          <div className="text-left max-w-xl px-6">
            <h2 className="font-nunito-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
              Contact details
            </h2>
            <ul className="font-nunito-regular">
              {contacts.map((contact) => (
                <li className="flex " key={contact.id}>
                  <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">{contact.icon}</i>
                  <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                    {contact.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
