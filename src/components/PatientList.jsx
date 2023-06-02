/* eslint-disable react/prop-types */
import Patient from "./Patient";
import uuid from "react-uuid";

const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {
 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus
            <span className="text-indigo-600 font-bold ">
              {" "}
              Pacientes y citas
            </span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Patient
                key={uuid()}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">Agrega pacientes</p>
        </>
      )}
    </div>
  );
};

export default PatientList;
