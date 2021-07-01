import hourly_sales from '../pages/data.json'
export default function Table({ stands }) {
    
    console.log()
    if (stands[0].length >0) {
        return (
            <div className="text-center text-gray-700">
                <table>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th> 6 am </th>
                            <th> 7 am </th>
                            <th> 8 am </th>
                            <th> 9 am </th>
                            <th> 10 am </th>
                            <th> 11 am </th>
                            <th> 12 pm </th>
                            <th> 1 pm </th>
                            <th> 2 pm </th>
                            <th> 3 pm </th>
                            <th> 4 pm </th>
                            <th> 5 pm </th>
                            <th> 6 pm </th>
                            <th> 7 pm </th>
                            <th>Totals</th>
                        </tr>
                    </thead>
                    <tbody>
    
                        {stands[0].map(cookiStand =>
                            <tr key={cookiStand.location}>
                                <td> {cookiStand.location} </td>
                                {cookiStand.hourly_sales.map((value,i) =>
                                    <td key={'value'+i}> {value} </td>
                                )}
                                <td>{cookiStand.hourly_sales.reduce((a, b) => a+b)}</td>
                            </tr>
                   )}
    
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Totals</td>
                                    {hourly_sales[0].hourly_sales.map((_,i) => {
    
                                        const amt = stands[0].reduce((acc, cur) => acc + cur.hourly_sales[i], 0);
                                        return(<td key={i+stands[0].length}>{amt}</td>)
                                    }
    
                                    )}
                            <td>{stands[1]}</td>
                        </tr>
                    </tfoot>
                </table>
    
            </div>
        )
    } else {
        return('No Data Available')
    }
    
}