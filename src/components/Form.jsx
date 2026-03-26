function Form() {

    return (
        <>
            <h1>Crear mi Cita</h1>
            <form>
                <div className="field">
                    <label>Nombre Mascota</label>
                    <input placeholder="Nombre Mascota" type="text" class="u-full-width"></input>
                </div>
                <div className="field">
                    <label>Nombre Dueño</label>
                    <input placeholder="Nombre Dueño de la mascota" type="text" class="u-full-width"></input>
                </div>
                <div className="field">
                    <label>Fecha</label>
                    <input type="date" class="u-full-width"></input>

                </div>
                <div className="field">
                    <label>Hora</label>
                    <input type="time" class="u-full-width"></input>
                </div>
                <div className="field">
                    <label>Síntomas</label>
                    <textarea class="u-full-width"></textarea>
                </div>

                <button type="submit" class="u-full-width button-primary">Agregar Cita</button>

            </form>
        </>
    )
}

export default Form
