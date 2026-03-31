function Form() {

    return (
        <>
            <h2>Crear mi Cita</h2>
            <form>
                    <label>Nombre Mascota</label>
                    <input placeholder="Nombre Mascota" type="text" class="u-full-width"></input>
                    <label>Nombre Dueño</label>
                    <input placeholder="Nombre dueño de la mascota" type="text" class="u-full-width"></input>
                    <label>Fecha</label>
                    <input type="date" class="u-full-width"></input>
                    <label>hora</label>
                    <input type="time" class="u-full-width"></input>
                    <label>Síntomas</label>
                    <textarea class="u-full-width"></textarea>

                <button type="submit" class="u-full-width button-primary">Agregar Cita</button>

            </form>
        </>
    )
}

export default Form
