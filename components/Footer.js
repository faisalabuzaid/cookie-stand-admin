export default function Footer({action}) {

    return (
        <div className="text-center">
            <>
        { action[1] ? 
            <footer className="absolute bottom-0 w-full px-8 py-4 bg-green-500">
            <p>{action[0].length} Locations World Wide</p>
            </footer>
            :

            <footer className="absolute bottom-0 w-full px-8 py-4 bg-green-500">
            <p> Log in first</p>
            </footer>
        }
        </>
        </div>
    )
}


