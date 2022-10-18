export default function ExperienceCV({ experience }) {
  const teaching = Object.entries(experience.teaching)
    .sort((a, b) => {
      const terms1 = a[1].terms;
      const terms2 = b[1].terms;
      let lastYear1 = terms1[terms1.length - 1][1];
      let lastYear2 = terms2[terms2.length - 1][1];
      if (lastYear1 === true) {
        lastYear1 = lastYear2 + 1;
      } else if (lastYear2 === true) {
        lastYear2 = lastYear1 + 1;
      }
      return lastYear2 - lastYear1;
    })
    .map((x, i) => {
      const institution = x[1].institution;
      const city = x[1].city;
      const country = x[1].country;
      const courses = x[1].courses;
      return (
        <div key={(x, i)}>
          <span>{x[0]}, </span>
          <span>
            {institution}. {city} – {country}
          </span>
        </div>
      );
    });

  return (
    <div>
      <h3>Experience</h3>
      {teaching}
    </div>
  );
}
