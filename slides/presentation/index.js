// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Fill,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Table,
  TableBody,
  TableRow,
  TableItem,
  Image,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  rocketchat: require("../assets/rocketchat.png"),
  node: require("../assets/logo.svg")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#404040",
    secondary: "#F8F8F8",
    tertiary: "#68caff",
    quartenary: "#95bc1a"
  },
  {
    primary: "'Open Sans'"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Image src={images.node} width={300}/>
          <Text margin="40px 0 0" textColor="secondary" bold textSize="60px" lineHeight="70px">
            Executando código inseguro com segurança usando o módulo VM
          </Text>
          <Text margin="40px 0 0" textColor="secondary" textSize="30px">
            Rodrigo K. Nascimento
          </Text>
          <Text margin="10px 0 0" textColor="secondary" textSize="30px">
            rodrigo.nascimento@rocket.chat
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            About me
          </Heading>
          <Fill>
            <Table>
              <TableBody>
                <TableRow>
                  <TableItem align="center">
                    <Link href="https://rocket.chat" style={{ margin: "0 400px 0 0" }}>
                      <Image src={images.rocketchat} width={200} />
                      <Text textColor="secondary">Rocket.Chat</Text>
                    </Link>
                  </TableItem>
                  <TableItem>
                    <List textColor="secondary" style={{ listStylePosition: "outside" }}>
                      <ListItem>
                        JavaScript full stack dev
                      </ListItem>
                      <ListItem>
                        Cofounder & CTO
                      </ListItem>
                      <ListItem>
                        <Link href="https://github.com/rodrigok" textColor="tertiary">
                          <i className="fa fa-github" aria-hidden="true" /> rodrigok
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link href="https://github.com/rodrigok" textColor="tertiary">
                          <i className="fa fa-twitter" aria-hidden="true" /> orodrigok
                        </Link>
                      </ListItem>
                    </List>
                  </TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Fill>
        </Slide>

        <Slide>
          <Image src={images.rocketchat} width={400} />
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            WE ARE HIRING!
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Scenario
          </Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/eval.txt")}
          ranges={[
              { loc: [0, 270], title: "The problem with eval" },
              { loc: [0, 3] },
              { loc: [4, 7] },
              { loc: [8, 13] },
              { loc: [14, 18] }
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/vm.example.txt")}
          ranges={[
            { loc: [0, 200], title: "VM Module" },
            { loc: [0, 1] },
            { loc: [4, 8] },
            { loc: [9, 16] },
            { loc: [17, 20] },
            { loc: [21, 23] },
            { loc: [24, 28] }
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/vm.return.txt")}
          ranges={[
            { loc: [0, 200], title: "VM Result" },
            { loc: [0, 1] },
            { loc: [2, 5] },
            { loc: [6, 13] }
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/vm.timeout.txt")}
          ranges={[
            { loc: [0, 200], title: "Timeout" },
            { loc: [0, 1] },
            { loc: [2, 5] },
            { loc: [6, 9] },
            { loc: [10, 16] }
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/vm.performance.txt")}
          ranges={[
            { loc: [0, 200], title: "Performance" },
            { loc: [2, 10] },
            { loc: [11, 20] },
            { loc: [21, 28] },
            { loc: [29, 32] },
            { loc: [33, 44] },
            { loc: [45, 56] }
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/vm.security.txt")}
          ranges={[
            { loc: [0, 200], title: "Security" },
            { loc: [3, 6] },
            { loc: [7, 10] },
            { loc: [11, 15] }
          ]}
        />

        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Security
          </Heading>
          <BlockQuote>
            <Quote textColor="secondary">
              Note: The vm module is not a security mechanism. Do not use it to run untrusted code.
            </Quote>
            <Cite>https://nodejs.org/api/vm.html</Cite>
          </BlockQuote>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/vm2.security.txt")}
          ranges={[
            { loc: [0, 200], title: "vm2" },
            { loc: [0, 2] },
            { loc: [3, 8] }
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/vm2.example.txt")}
          ranges={[
            { loc: [0, 200], title: "vm2" },
            { loc: [2, 12] }
          ]}
        />

        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Conclusion
          </Heading>
          <List textColor="secondary">
            <Appear>
              <ListItem>
                There are business cases
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Avoid using eval
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Node’s vm module provides a safer implementation, but...
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                VM2 appears to provide a more solid sandbox, but...
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Thanks for listening!
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1} fit lineHeight={1} textColor="secondary">
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
