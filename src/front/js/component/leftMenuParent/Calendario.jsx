import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../../styles/Calendar.css";
import { formatDate } from "date-fns";

const HandleChange = value =>
  alert(`New date is: ${value.toLocaleDateString()}`);

const Calendario = ({ eventos }) => {
  const [value, setValue] = useState(new Date()); // Día seleccionado
  const [activeStartDate, setActiveStartDate] = useState(new Date()); // Mes visible

  const handleActiveStartDateChange = ({ activeStartDate }) => {
    setActiveStartDate(activeStartDate);

    // Si volvemos al mes actual, seleccionamos el día actual
    const today = new Date();
    if (
      today.getFullYear() === activeStartDate.getFullYear() &&
      today.getMonth() === activeStartDate.getMonth()
    ) {
      setValue(today);
    }
  };

  const tileClassName = ({ date, view }) => {
    // Asegúrate de que estamos en la vista mensual
    if (view === "month") {
      // Formateamos la fecha para comparar
      const formattedDate = date.toISOString().split("T")[0];

      // Filtra los eventos que coinciden con la fecha actual
      const matchingEvents = eventos.filter(
        evento => evento.date === formattedDate
      );

      if (matchingEvents.length > 0) {
        // Si hay algún evento marcado como feriado
        if (matchingEvents.some(evento => evento.holiday)) {
          return "highlight-holiday"; // Clase CSS para feriados
        }
        return "highlight"; // Clase CSS para eventos regulares
      }
    }
    return null; // Ninguna clase si no hay eventos
  };

  return (
    <div className="calendar-container">
      <Calendar
        onActiveStartDateChange={handleActiveStartDateChange}
        onClickDay={(value, e) => {
          console.log(`Day pressed: ${value}`);
          console.log(formatDate(value, "yyyy-mm-dd"));
        }}
        onChange={setValue}
        tileClassName={tileClassName}
        value={value}
      />
    </div>
  );
};

export default Calendario;
