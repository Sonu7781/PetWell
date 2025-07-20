import listingsData from "../Data/data";

const Listings = () => {
  const sampleListings = listingsData.data;

  return (
    <>
        <h1 class="bg-red-400 text-4xl font-bold text-center p-4 rounded-lg shadow-md">
            Animals in Urgent Need of Support Worldwide
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {sampleListings.map((listing, index) => (
                <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <img
                    src={listing.image.url}
                    alt={listing.name}
                    className="w-full h-60 object-cover"
                />
                <div className="p-2">
                    <h3 className="text-lg font-bold">{listing.name}</h3>
                    <p className="text-sm text-gray-600">{listing.description}</p>
                </div>
                </div>
            ))}
        </div>
    </>
  );
};

export default Listings;

