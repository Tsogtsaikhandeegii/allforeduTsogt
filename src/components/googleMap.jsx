import GoogleMapReact from "google-map-react"


const AnyReactComponent = ({ text }) => <div >{text}</div>;


export default function () {
    const center = {
        lat: 47.8920382,
        lng: 106.9082375

    };

    
    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: "AIzaSyA9JxzKBkv9-MGOSfmAgEiw0bxmvKUwe-Q",
                language: "en",
                region: "US",
            }}
            center={center}
            zoom={12}
            fullscreenControl={false}
            debounced={true}
            yesIWantToUseGoogleMapApiInternals

        >
            <AnyReactComponent
            lat={47.8920382}
            lng={106.9082375}
            text="🚀"
          />
        </GoogleMapReact>
    )
}