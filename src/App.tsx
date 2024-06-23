import { RatingButtonGroup } from "./components/rating-button-group.tsx";
import { useRatings } from "./hooks/useRatings.ts";
import { Rating, Ratings } from "./types.ts";

interface RatingGroup {
  label: string;
  id: keyof Ratings;
}
const RatingGroups: RatingGroup[] = [
  {
    id: "plot",
    label: "Plot",
  },
  {
    id: "attraction",
    label: "Attraction",
  },
  {
    id: "theme",
    label: "Theme",
  },
  {
    id: "acting",
    label: "Acting",
  },
  {
    id: "dialogue",
    label: "Dialogue",
  },
  {
    id: "cinematography",
    label: "Cinematography",
  },
  {
    id: "editing",
    label: "Editing",
  },
  {
    id: "soundtrack",
    label: "Soundtrack",
  },
  {
    id: "directing",
    label: "Directing",
  },
  {
    id: "it_factor",
    label: "IT Factor",
  },
];

function App() {
  const { ratings, setCategoryRating, score } = useRatings();

  return (
    <main className="grid h-full grid-cols-2 p-4">
      <section className="flex flex-col items-center justify-evenly">
        <h1 className="mt-auto text-5xl">Rating</h1>
        <p className="mb-auto">
          <span className="text-9xl font-bold">{score.toFixed(1)}</span>
          <span className="self-center text-3xl font-normal text-gray-500">
            /{Rating.GREAT}
          </span>
        </p>
      </section>
      <section className="flex flex-col items-center justify-around">
        {RatingGroups.map(({ id, label }) => (
          <RatingButtonGroup
            key={id}
            id={id}
            label={label}
            rating={ratings[id]}
            setRating={(rating) => setCategoryRating(id, rating)}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
