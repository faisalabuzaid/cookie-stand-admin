export default function Footer({action}) {

    return (
        <footer className="absolute bottom-0 w-full px-8 py-4 bg-green-500">
            <p>{action.length} Locations World Wide</p>
        </footer>
    )
}


