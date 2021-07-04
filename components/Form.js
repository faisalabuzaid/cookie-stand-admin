

export default function Form({ action }) {

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const calculatePerHour = function (min, max, avg) {
    let hourly_sales = []
    let totalPerHour = 0
    for (let i = 0; i < 14; i++) {
      let totalCookiePerHour = Math.floor(getRandomInt(min, max) * avg);
      hourly_sales.push(totalCookiePerHour)
    }
    action[2](action[3] + hourly_sales.reduce((a, b) => a + b))
    return hourly_sales
  }


  const registerUser = e => {
    e.preventDefault();
    const result =
    {
      'location': e.target.location.value,
      'hourly_sales': calculatePerHour(e.target.min.value, e.target.max.value, e.target.avg.value),
    }
    action[1]([...action[0], result]);
    e.target.reset();
  }

    return (
      <div className="m-10 text-center bg-green-300 border gray-700">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold">Create Cookie Stand</h2>
        </div>
  
        <div>
          <form onSubmit={registerUser}>
            <fieldset>
              <div>
                <label className="m-4" htmlFor="location">Location</label>
                <input className="w-4/6 px-3 py-2 m-4 border text-grey-darkest" id="location" type="text" autoComplete="location" required />
              </div>
  
              <div className="mr-10">
                <label className="w-2/6" htmlFor="max">Maximum customer per hour</label>
                <label className="w-2/6 ml-12 mr-12" htmlFor="avg">Average coookies per sale</label>
                <label className="w-2/6" htmlFor="min">Minimum customer per hour</label>
              </div>
              <div className="ml-10">
                <input className="px-5 py-2 m-4 border text-grey-darkest" id="min" type="number" autoComplete="location" required />
                <input className="px-5 py-2 m-4 border text-grey-darkest" id="max" type="number" autoComplete="location" required />
                <input className="px-5 py-2 m-4 border text-grey-darkest" id="avg" type="number" autoComplete="location" required />
                <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-700 ont-bold" type="submit">Create</button>
              </div>
            </fieldset>
          </form>
        </div>
  
      </div>
  
    )

}