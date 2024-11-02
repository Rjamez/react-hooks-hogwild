import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";
import HogForm from "./HogForm";

function App() {
    const [greasedOnly, setGreasedOnly] = useState(false);
    const [sortOption, setSortOption] = useState("none");
    const [hiddenHogs, setHiddenHogs] = useState([]);
    const [hogList, setHogList] = useState(hogs);

    // Function to hide a hog by adding it to the hiddenHogs array
    const hideHog = (hogName) => {
        setHiddenHogs((prevHiddenHogs) => [...prevHiddenHogs, hogName]);
    };

    // Function to add a new hog
    const addHog = (newHog) => {
        setHogList((prevHogList) => [...prevHogList, newHog]);
    };

    // Filter and sort hogs based on greased filter, hidden state, and sort option
    const filteredHogs = hogList
        .filter(hog => (greasedOnly ? hog.greased : true))
        .filter(hog => !hiddenHogs.includes(hog.name));

    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortOption === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortOption === "weight") {
            return a.weight - b.weight;
        }
        return 0;
    });

    return (
        <div className="App">
            <Nav />
            <div className="navWrapper">
                <h1 className="headerText largeHeader">Click on images for more information!</h1>
                <div className="filterWrapper">
                    <label>
                        <input
                            type="checkbox"
                            checked={greasedOnly}
                            onChange={() => setGreasedOnly(!greasedOnly)}
                        />
                        Show only greased hogs
                    </label>
                    <label style={{ marginLeft: "1em" }}>
                        Sort by:
                        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                            <option value="none">None</option>
                            <option value="name">Name</option>
                            <option value="weight">Weight</option>
                        </select>
                    </label>
                </div>
            </div>
            <HogForm addHog={addHog} />
            <div className="hog-container indexWrapper">
                {sortedHogs.map((hog) => (
                    <HogTile
                        key={hog.name}
                        name={hog.name}
                        image={hog.image}
                        specialty={hog.specialty}
                        weight={hog.weight}
                        greased={hog.greased}
                        highestMedal={hog["highest medal achieved"]}
                        hideHog={hideHog}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;