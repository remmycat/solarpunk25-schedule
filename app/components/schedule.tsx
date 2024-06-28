import { DateTime, Time } from "./datetime";
import { SpEvent } from "./event";

const spIsoDate = (hourAndMinute: string) =>
  `2024-06-29T${hourAndMinute}:00.000-06:00`;

export function Schedule() {
  return (
    <section aria-labelledby="schedule-caption">
      <table>
        <caption id="schedule-caption">Schedule</caption>
        <thead>
          <tr>
            <td />
            <th scope="col">Track A</th>
            <th scope="col">Track B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <DateTime isoDate={spIsoDate("08:30")} />
            </th>
            <td colSpan={2}>Start</td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("08:30")} /> to{" "}
              <Time isoDate={spIsoDate("08:45")} />
            </th>
            <td>Opening</td>
            <td />
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("08:45")} /> to{" "}
              <Time isoDate={spIsoDate("09:00")} />
            </th>
            <td>
              <SpEvent
                name="Land Acknowledgement"
                speakers={[{ name: "Jackson Pind" }]}
              />
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("09:00")} /> to{" "}
              <Time isoDate={spIsoDate("10:15")} />
            </th>
            <td>
              <SpEvent
                eventType="Keynote"
                name="Why We Need to Envision a Hopeful Future"
                speakers={[
                  {
                    name: "Starhawk",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Keynote%20Speaker:%20Starhawk",
                  },
                ]}
              />
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("10:15")} /> to{" "}
              <Time isoDate={spIsoDate("10:30")} />
            </th>
            <td colSpan={2}>Break</td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("10:30")} /> to{" "}
              <Time isoDate={spIsoDate("11:30")} />
            </th>
            <td>
              <SpEvent
                eventType="Panel"
                name="Challenging the AI paradigm"
                speakers={[
                  {
                    name: "Shawn Shan",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Shawn%20Shan",
                  },
                  {
                    name: "Nicolò Brandizzi",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Nicol%C3%B2%20Brandizzi",
                  },
                ]}
              />
            </td>
            <td>
              <SpEvent
                name="Intimate Worldbuilding: A Solarpunk Poetry Workshop"
                speakers={[
                  {
                    name: "Luka Dowell",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Luka%20Dowell",
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("11:30")} /> to{" "}
              <Time isoDate={spIsoDate("11:45")} />
            </th>
            <td colSpan={2}>Break</td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("11:45")} /> to{" "}
              <Time isoDate={spIsoDate("12:15")} />
            </th>
            <td>
              <SpEvent
                name={
                  "Solarpunk Education & The Maker Movement: Towards a more holistic approach to structured learning"
                }
                speakers={[
                  {
                    name: "Hayley Steele",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Hayley%20Steele",
                  },
                ]}
              />
              <br />
              <br />
              <SpEvent
                name={"Children's Literature Meets Solarpunk"}
                speakers={[
                  {
                    name: "Dalila Forni",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Dalila%20Forni",
                  },
                ]}
              />
            </td>
            <td rowSpan={2}>
              <SpEvent
                name={"Decentering Humans in Solarpunk"}
                speakers={[
                  {
                    name: "Rodrigo Culagovski",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Rodrigo%20Culagovski",
                  },
                  {
                    name: "AE Marling",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=AE%20Marling",
                  },
                  {
                    name: "Ana Sun",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Ana%20Sun",
                  },
                  {
                    name: "BrightFlame",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=BrightFlame",
                  },
                  {
                    name: "Jerri Jerreat",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Jerri%20Jerreat",
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("12:15")} /> to{" "}
              <Time isoDate={spIsoDate("12:45")} />
            </th>
            <td>
              <SpEvent
                name={"Solar Server: Low-Carbon Videogames"}
                speakers={[
                  {
                    name: "Kara Stone",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Kara%20Stone",
                  },
                ]}
              />
              <br />
              <br />
              <SpEvent
                name={
                  "Turning Games into Real-life Strategies for Change: Climate Literacy to Civic Action"
                }
                speakers={[
                  {
                    name: "Thomas Yount",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Thomas%20Yount",
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("12:45")} /> to{" "}
              <Time isoDate={spIsoDate("13:00")} />
            </th>
            <td colSpan={2}>Break</td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("13:00")} /> to{" "}
              <Time isoDate={spIsoDate("13:30")} />
            </th>
            <td>
              <SpEvent
                name="Domestic Infrastructure of Food"
                speakers={[
                  {
                    name: "Leyuan Li",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Leyuan%20Li",
                  },
                ]}
              />
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("13:30")} /> to{" "}
              <Time isoDate={spIsoDate("14:45")} />
            </th>
            <td colSpan={2}>{"Lunch Break & Social"}</td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("14:45")} /> to{" "}
              <Time isoDate={spIsoDate("15:45")} />
            </th>
            <td>
              <SpEvent
                name={
                  "Regenerative Duality: Balancing Light & Dark in Tech-Driven Environmental Solutions"
                }
                speakers={[
                  {
                    name: "Sanjana Paul",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Sanjana%20Paul",
                  },
                  {
                    name: "Camille Minns",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Camille%20Minns",
                  },
                ]}
              />
            </td>
            <td>
              <SpEvent
                name={
                  "Fistfights in Utopia: a Q&A Roundtable on Conflict in Solarpunk Stories"
                }
                speakers={[
                  {
                    name: "Ariel Kroon",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Ariel%20Kroon",
                  },
                  {
                    name: "Jack Nicholls",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Jack%20Nicholls",
                  },
                  {
                    name: "Holly Schofield",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Holly%20Schofield",
                  },
                  {
                    name: "Brianna Castagnozzi",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Brianna%20Castagnozzi",
                  },
                  {
                    name: "Selena Middleton",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Selena%20Middleton",
                  },
                  {
                    name: "Christina De La Rocha",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Christina%20De%20La%20Rocha",
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("15:45")} /> to{" "}
              <Time isoDate={spIsoDate("16:00")} />
            </th>
            <td colSpan={2}>{"Break"}</td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("16:00")} /> to{" "}
              <Time isoDate={spIsoDate("17:00")} />
            </th>
            <td>
              <SpEvent
                name="Self-Compassion as a Starting Place to Address Climate Change"
                speakers={[
                  {
                    name: "Timothy Hand",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Tim%20Hand",
                  },
                ]}
              />
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("17:00")} /> to{" "}
              <Time isoDate={spIsoDate("17:15")} />
            </th>
            <td colSpan={2}>{"Break"}</td>
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("17:15")} /> to{" "}
              <Time isoDate={spIsoDate("17:45")} />
            </th>
            <td>
              <SpEvent
                name={
                  "Resilience is Not Enough: Avoiding the ‘Resilience Machine’ Through Radical Solarpunk Revolution"
                }
                speakers={[
                  {
                    name: "Phillip M Crosby",
                    href: "https://www.solarpunkconference.com/speakers#:~:text=Phillip%20M%20Crosby",
                  },
                ]}
              />
            </td>
            <td />
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("17:45")} /> to{" "}
              <Time isoDate={spIsoDate("18:00")} />
            </th>
            <td>Closing Ceremony</td>
            <td />
          </tr>
          <tr>
            <th scope="row">
              <Time isoDate={spIsoDate("18:00")} /> to{" "}
              <Time isoDate={spIsoDate("19:00")} />
            </th>
            <td>After Party</td>
            <td />
          </tr>
          <tr>
            <th scope="row">
              <DateTime isoDate={spIsoDate("19:00")} />
            </th>
            <td colSpan={2}>End</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
