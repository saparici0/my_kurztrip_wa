function Form() {
    const newPackage = async event => {
        event.preventDefault()

        const res = await fetch(
            'http://localhost:8080/packages/add',
            {
                body: JSON.stringify({
                    address: event.target.address.value,
                    weight: event.target.weight.value,
                    volume: event.target.volume.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )

        const result = await res.json()
    }

    return (
        <form onSubmit={ newPackage }>
            <div>
                <label htmlFor="address">Address</label>
                <input id="address" name="address" type="text" autoComplete="name" required />
            </div>
            <div>
                <label htmlFor="weight">Weight</label>
                <input id="weight" type="number" required />
            </div>
            <div>
                <label htmlFor="volume">Volume</label>
                <input id="volume" type="number" required/>
            </div>
            <button type="submit">Add package</button>
        </form>
    )
}

export default Form;
