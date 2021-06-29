import { hourly_sales } from '../pages/data';

export default function Table({ action }) {
    const total = (test) => {
        let result = 0
        result = result+parseInt(test)
        return result
    }

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

                    {action.map((h) =>
                        <tr key={action.length}>
                            <td> {h.location} </td>
                            {hourly_sales.map((h) =>
                                <td key={hourly_sales.length}> {hourly_sales[Math.floor(Math.random() * hourly_sales.length)]} </td>
                            )}
                            <td>{total(hourly_sales)}</td>
                        </tr>
               )}

                </tbody>
                <tfoot>
                    <tr>
                        <td>Totals</td>
                        {hourly_sales.map(a =>
                            <td key={hourly_sales.length}>{a}</td>
                            )}
                        <td>517</td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}

