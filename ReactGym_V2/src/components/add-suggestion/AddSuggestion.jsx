import { useState, useEffect } from "react";
import RateService from "../../services/firebase/suggestions.service.js";
import "./AddSuggestion.css"

function Form() {
    const [name, setName] = useState("");
    const [rate, setRate] = useState("");
    const [alert, setAlert] = useState("");
    const [alertType, setAlertType] = useState("");
    const [rates, setRates] = useState([]);
    const [editRateIndex, setEditRateIndex] = useState(null);

    useEffect(() => {
        RateService.getAllRates().then((rates) => {
            setRates(rates);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    const changeName = (e) => {
        setName(e.target.value);
    };

    const changeRate = (e) => {
        setRate(e.target.value);
    };

    const addNewRate = (e) => {
        e.preventDefault();
        if (!name.trim() || !rate.trim()) {
            setAlert("Los campos no pueden estar vacíos");
            setAlertType("error-message");
            setTimeout(() => {
                setAlert("");
            }, 3000);
            return;
        }
        saveRate(name, rate);

        let auxRates = rates;
        auxRates.push({
            name: e.target.name.value,
            rate: e.target.rate.value
        });

        setRates([...auxRates])
    };

    const saveRate = (name, rate) => {
        RateService.addRate(name, rate).then(() => {
            setAlert("Reseña añadida con éxito");
            setAlertType("success-message");
            setName("");
            setRate("");
            setTimeout(() => {
                setAlert("");
            }, 3000);
        }).catch(error => {
            setAlert("Error al guardar la reseña");
            setAlertType("error-message");
            setTimeout(() => {
                setAlert("");
            }, 3000);
            console.error(error);
        });
    };

    const editRate = (index) => {
        setEditRateIndex(index);
        setName(rates[index].name);
        setRate(rates[index].rate);
    };

    const saveEditedRate = () => {
        let auxRates = [...rates];
        let rateId = auxRates[editRateIndex].id; // get the ID of the rate
        auxRates[editRateIndex] = { id: rateId, name, rate };
        setRates(auxRates);
        RateService.updateRate(rateId, name, rate).then(() => {
            setName("");
            setRate("");
            setEditRateIndex(null);
        }).catch((error) => {
            console.error(error);
        });
    };

    const deleteRate = (index) => {
        let rateId = rates[index].id; // get the ID of the rate
        RateService.deleteRate(rateId).then(() => {
            let auxRates = [...rates];
            auxRates.splice(index, 1);
            setRates(auxRates);
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <>
            <h1>¡Déjanos <span>una reseña!</span></h1>
            {alert && <p className={alertType}>{alert}</p>}
            <form className="form" onSubmit={addNewRate}>
                <label htmlFor="name" className="name">Nombre:</label>
                <input type="text" id="name" name="name" value={name} onChange={changeName} className={alertType === "error-message" ? "error" : ""} />

                <label htmlFor="rate" className="rate">Reseña:</label>
                <input type="text" id="rate" name="rate" value={rate} onChange={changeRate} className={alertType === "error-message" ? "error" : ""} />

                <button type="submit" className="sub">Añadir reseña</button>
                {editRateIndex !== null && <button type="button" onClick={saveEditedRate} className="save-changes-button">Guardar cambios</button>}
            </form>

            <div className="form-container">
                {
                    rates.map((r, index) => (
                        <div key={index} className="form-rate">
                            <p>{r.name}: {r.rate}</p>
                            <div>
                                <button onClick={() => editRate(index)} className="form-edit">Editar</button>
                                <button onClick={() => deleteRate(index)} className="form-delete">Eliminar</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default Form;