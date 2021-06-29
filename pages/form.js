export default function Form({action}) {
    const registerUser = e => {
        e.preventDefault();
        const result = {
          'location': e.target.location.value ,
          'mincus': e.target.min.value ,
          'maxcus': e.target.max.value ,
          'avgcookies': e.target.avg.value
        }
    action(result)
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
              <label className ="m-4" htmlFor="location">Location</label>
              <input className ="w-4/6 px-3 py-2 m-4 border text-grey-darkest" id="location" type="text" autoComplete="location" required />
            </div>
          
            <div className="mr-10">
              <label className ="w-2/6" htmlFor="max">Maximum customer per hour</label>
              <label className ="w-2/6 ml-12 mr-12" htmlFor="avg">Average coookies per sale</label>
              <label className ="w-2/6" htmlFor="min">Minimum customer per hour</label>
            </div>
            <div className="ml-10">
              <input className ="px-5 py-2 m-4 border text-grey-darkest" id="min" type="number" autoComplete="location" required />
              <input className ="px-5 py-2 m-4 border text-grey-darkest" id="max" type="number" autoComplete="location" required />
              <input className ="px-5 py-2 m-4 border text-grey-darkest" id="avg" type="number" autoComplete="location" required />
              <button className="px-4 py-2 bg-green-500 rounded hover:bg-green-700 ont-bold" type="submit">Create</button>
            </div>
          </fieldset>
        </form>
        </div>
    
        </div>
        
      )
}