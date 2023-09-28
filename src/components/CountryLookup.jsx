"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  useEffect(() => {
    fetch(
      `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  const [country, setCountry] = useState("United States");

  return <div>{country}</div>;
}
