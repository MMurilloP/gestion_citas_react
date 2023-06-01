const Patient = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bolt mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> Hook</span>
      </p>
      <p className="font-bolt mb-3 text-gray-700 uppercase">
        Propietario:
        <span className="font-normal normal-case"> Manuel</span>
      </p>
      <p className="font-bolt mb-3 text-gray-700 uppercase">
        Emial:
        <span className="font-normal normal-case"> correo@correo.com</span>
      </p>
      <p className="font-bolt mb-3 text-gray-700 uppercase">
        Fecha Alta:
        <span className="font-normal normal-case"> 10 diciembre 2022</span>
      </p>
      <p className="font-bolt mb-3 text-gray-700 uppercase">
        Sintomas:
        <span className="font-normal normal-case">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          officiis possimus iure adipisci. Perspiciatis, rem sequi provident
          eveniet nihil quibusdam quod nemo aspernatur vitae deleniti dolores
          maiores recusandae odio impedit?
        </span>
      </p>
    </div>
  );
};

export default Patient;
