import React from 'react';

const Formulario = () => {

    const { register, handleSubmit } = useForm();

    return <di>
        <h2>Formulario</h2>
        <form>
            <div>
                <label>Expediente</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>fecIngreso</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>folio</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>usuario</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>fecVencimiento</label>
                <input type="text" name="" />
            </div>
        </form>
    </di>
}

export default Formulario;