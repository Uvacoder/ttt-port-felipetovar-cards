import "./Bio.scss";
import ImageSlide from "../../../ImageSlide/ImageSlide";

export default function Bio() {
  const links = [
    "https://i1.sndcdn.com/avatars-GgWqaPPepI33Iwpg-l4g08Q-t500x500.jpg",
    "https://static.wixstatic.com/media/98a1eb_f2b8299f1b384167bd34d28a04e236ae~mv2.png/v1/fill/w_516,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/98a1eb_f2b8299f1b384167bd34d28a04e236ae~mv2.png",
    "https://i1.sndcdn.com/artworks-000593763249-jeaaqg-t500x500.jpg",
  ];
  return (
    <div className="bio-view">
      <h2 className="header">Bio</h2>
      <ImageSlide links={links} />
      <div className="bio">
        <div className="content">
          <p>
            Characterized by a strong interest in exploring sound perception, memory, and recognition, the music of Colombian composer Felipe
            Tovar-Henao (b. 1991) has been consistently awarded and performed throughout his emerging professional career. His creative work is deeply
            rooted in aesthetic experiences with technology, philosophy, and cinema, incorporating both acoustic and electroacoustic media.
          </p>
          <br />
          <p>
            Recent highlights include being a resident composer at the 2020 Mizzou International Composers Festival, being a finalist of the 2019
            SEAMUS/ASCAP Award, as well as receiving the 2018 SCI/ASCAP Student Commission Award and the 2018 ASCAP Foundation Morton Gould Young
            Composer Award. His music has been performed by artists and ensembles such as Alarm Will Sound, Grossman Ensemble, Quatuor Diotima, Sound
            Icon, IU New Music Ensemble, AURA Contemporary Ensemble, Hear no Evil, Sociedad de Música de Cámara de Bogotá, Ensamble Periscopio, Andrés
            Orozco-Estrada, Orquesta Sinfónica EAFIT, among many others. Similarly, he has received commissions and grants from institutions,
            including SCI/ASCAP, the Chicago Center for Contemporary Composition (CCCC), Mizzou New Music Initiative, FilarMed, Indiana University,
            Colombian Ministry of Culture, Alcaldía de Medellín, and Universidad EAFIT.
          </p>
          <br />
          <p>
            He has been a featured composer at a variety of international festivals such as WOCMAT (Taiwan, 2019), Electroacoustic Barn Dance (US,
            2019), SCI National Conference (US, 2019), SEAMUS National Conference (US, 2019, ‘18), Seoul International Computer Music Festival (South
            Korea, 2017), IRCAM’s CIEE Summer Contemporary Music Creation + Critique Program and ManiFeste Academy (France, 2016), Electroacoustic
            Music Midwest (US, 2016), and the Midwest Composer Symposium (US, 2019, ‘16).
          </p>
          <br />
          <p>
            He has held teaching positions as Associate Instructor and Coordinator of the IU JSoM Composition Department (2017-'20), as the 2021/22
            CCCC Postdoctoral Researcher at the University of Chicago, and as Lecturer in Music Theory and Composition at Universidad EAFIT (2020-21,
            2022-pr.), where he currently teaches.
          </p>
        </div>
      </div>
    </div>
  );
}
