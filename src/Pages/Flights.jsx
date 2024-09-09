import React, { useState } from 'react';

const airports = ["Karachi (KHI)", "Lahore (LHE)", "Islamabad (ISB)", "Peshawar (PEW)", "Quetta (UET)", "Multan (MUX)"];
const cabinClasses = ["Economy", "Business", "Premium"];

const Flights = () => {
  const [tripType, setTripType] = useState("one-way");
  const [flights, setFlights] = useState([{ from: "", to: "", departureDate: "" }]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  const validateFlightSegments = () => {
    // Validate that all flights in the multi-city form are filled
    for (let i = 0; i < flights.length; i++) {
      const flight = flights[i];
      if (!flight.from || !flight.to || !flight.departureDate) {
        return false;
      }
    }
    return true;
  };

  const handleSearch = () => {
    if (tripType === "multi-city" && !validateFlightSegments()) {
      alert("Please fill all required fields in every flight segment.");
      return;
    }
  
    if (tripType !== "multi-city" && (!from || !to || !departureDate)) {
      alert("Please fill all required fields.");
      return;
    }
  
    const searchDetails = {
      flights: tripType === "multi-city" ? flights : [{ from, to, departureDate, returnDate: tripType === "round-trip" ? returnDate : null }],
      from,
      to,
      departureDate,
      returnDate: tripType === "round-trip" ? returnDate : null,
      travelers: { adults, children, infants },
      cabinClass,
    };
  
    setRecentSearches({
      ...recentSearches,
      [tripType]: [...(recentSearches[tripType] || []), searchDetails],
    });
  

    // Reset input values after search
    setFrom("");
    setTo("");
    setDepartureDate("");
    setReturnDate("");
    setAdults(1);
    setChildren(0);
    setInfants(0);
    setCabinClass("Economy");
  };

  const addFlight = () => {
    setFlights([...flights, { from: "", to: "", departureDate: "" }]);
  };

  const updateFlight = (index, field, value) => {
    const updatedFlights = flights.map((flight, i) =>
      i === index ? { ...flight, [field]: value } : flight
    );
    setFlights(updatedFlights);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="mb-6">
          <img src="imgup.png" alt="Illustration of a man with luggage and another man working on a laptop at an airport" className="w-full rounded-lg shadow-md" />
        </div>

        {/* Flight Search Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="tripType" className="form-radio text-green-500" checked={tripType === "one-way"} onChange={() => setTripType("one-way")} />
                <span>One-Way</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="tripType" className="form-radio text-green-500" checked={tripType === "round-trip"} onChange={() => setTripType("round-trip")} />
                <span>Round-Trip</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="tripType" className="form-radio text-green-500" checked={tripType === "multi-city"} onChange={() => setTripType("multi-city")} />
                <span>Multi-City</span>
              </label>
            </div>
          </div>

          {/* Multi-City Form */}
          {tripType === "multi-city" && flights.map((flight, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Flight {index + 1}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="relative">
                  <label className="block text-gray-700">From</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                    <i className="fas fa-plane-departure text-green-500 mr-2"></i>
                    <select className="flex-1 outline-none" value={flight.from} onChange={(e) => updateFlight(index, "from", e.target.value)}>
                      <option value="" disabled>Leave from</option>
                      {airports.map((airport, i) => (
                        <option key={i} value={airport}>{airport}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-gray-700">To</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                    <i className="fas fa-plane-arrival text-green-500 mr-2"></i>
                    <select className="flex-1 outline-none" value={flight.to} onChange={(e) => updateFlight(index, "to", e.target.value)}>
                      <option value="" disabled>Going to</option>
                      {airports.map((airport, i) => (
                        <option key={i} value={airport}>{airport}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-gray-700">Departure Date</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                    <input type="date" className="flex-1 outline-none" value={flight.departureDate} onChange={(e) => updateFlight(index, "departureDate", e.target.value)} />
                    <i className="fas fa-calendar-alt text-gray-500 ml-2"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {tripType === "multi-city" && (
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-4" onClick={addFlight}>+ Add Another Flight</button>
          )}

          {/* Form for One-Way and Round-Trip */}
          {tripType !== "multi-city" && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <label className="block text-gray-700">From</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                    <i className="fas fa-plane-departure text-green-500 mr-2"></i>
                    <select className="flex-1 outline-none" value={from} onChange={(e) => setFrom(e.target.value)}>
                      <option value="" disabled>Leave from</option>
                      {airports.map((airport, index) => (
                        <option key={index} value={airport}>{airport}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-gray-700">To</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                    <i className="fas fa-plane-arrival text-green-500 mr-2"></i>
                    <select className="flex-1 outline-none" value={to} onChange={(e) => setTo(e.target.value)}>
                      <option value="" disabled>Going to</option>
                      {airports.map((airport, index) => (
                        <option key={index} value={airport}>{airport}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="relative">
                  <label className="block text-gray-700">Departure Date</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                    <input type="date" className="flex-1 outline-none" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
                    <i className="fas fa-calendar-alt text-gray-500 ml-2"></i>
                  </div>
                </div>
                {tripType === "round-trip" && (
                  <div className="relative">
                    <label className="block text-gray-700">Return Date</label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-2 mt-1">
                      <input type="date" className="flex-1 outline-none" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
                      <i className="fas fa-calendar-alt text-gray-500 ml-2"></i>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Travelers Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="relative">
              <label className="block text-gray-700">Travelers</label>
              <div className="border border-gray-300 rounded-lg p-2 mt-1 relative" onClick={() => setShowTravelersDropdown(!showTravelersDropdown)}>
                <i className="fas fa-users text-gray-500 mr-2"></i>
                <span>{adults} Adults, {children} Children, {infants} Infants</span>
              </div>
              {showTravelersDropdown && (
                <div className="absolute z-10 bg-white border border-gray-300 rounded-lg p-4 shadow-md mt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span>Adults</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setAdults(adults - 1)} disabled={adults <= 0} className="px-2 py-1 bg-gray-200 text-gray-600 rounded">-</button>
                      <span>{adults}</span>
                      <button onClick={() => setAdults(adults + 1)} className="px-2 py-1 bg-gray-200 text-gray-600 rounded">+</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span>Children</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setChildren(children - 1)} disabled={children <= 0} className="px-2 py-1 bg-gray-200 text-gray-600 rounded">-</button>
                      <span>{children}</span>
                      <button onClick={() => setChildren(children + 1)} className="px-2 py-1 bg-gray-200 text-gray-600 rounded">+</button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Infants</span>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => setInfants(infants - 1)} disabled={infants <= 0} className="px-2 py-1 bg-gray-200 text-gray-600 rounded">-</button>
                      <span>{infants}</span>
                      <button onClick={() => setInfants(infants + 1)} className="px-2 py-1 bg-gray-200 text-gray-600 rounded">+</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <label className="block text-gray-700">Cabin Class</label>
              <div className="border border-gray-300 rounded-lg p-2 mt-1">
                <select className="w-full outline-none" value={cabinClass} onChange={(e) => setCabinClass(e.target.value)}>
                  {cabinClasses.map((cabin, index) => (
                    <option key={index} value={cabin}>{cabin}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md" onClick={handleSearch}>Add Flight</button>
        </div>

        {/* Recent Searches */}
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-lg font-semibold mb-4">Recent Added Flights</h2>
  <div className="space-y-4">
    {recentSearches[tripType]?.map((search, index) => (
      <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
        {tripType === "multi-city" ? (
          // Render each flight segment in a multi-city trip
          search.flights.map((flight, i) => (
            <div key={i} className="mb-2">
              <div><strong>Flight {i + 1}:</strong></div>
              <div><strong>From:</strong> {flight.from}</div>
              <div><strong>To:</strong> {flight.to}</div>
              <div><strong>Departure Date:</strong> {flight.departureDate}</div>
            </div>
          ))
        ) : (
          <>
            <div><strong>From:</strong> {search.flights[0].from}</div>
            <div><strong>To:</strong> {search.flights[0].to}</div>
            <div><strong>Departure Date:</strong> {search.flights[0].departureDate}</div>
            {search.flights[0].returnDate && <div><strong>Return Date:</strong> {search.flights[0].returnDate}</div>}
          </>
        )}
        <div><strong>Travelers:</strong> {search.travelers.adults} Adults, {search.travelers.children} Children, {search.travelers.infants} Infants</div>
        <div><strong>Cabin Class:</strong> {search.cabinClass}</div>
      </div>
    ))}
  </div>
</div>
      </div>
    </>
  );
};

export default Flights;
