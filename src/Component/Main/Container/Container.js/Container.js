import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Container = () => {
     return (
          <section className="ctn w-75 m-auto my-5">
               <CardGroup className='gap-3'>
                    <Card className='shadow'>
                         <Card.Img variant="top" src={require("../../../../Images/7.png")} />
                         <Card.Body>
                              <Card.Title>SEA</Card.Title>
                              <Card.Text>
                                   This is a wider card with supporting text below as a natural lead-in
                                   to additional content. This card has even longer content than the
                                   first to show that equal height action.
                              </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                              <a href='/m' className="text-muted text-decoration-none ">Read more ...</a>
                         </Card.Footer>
                    </Card>
                    <Card className='shadow'>
                         <Card.Img variant="top" src={require("../../../../Images/6.png")} />
                         <Card.Body>
                              <Card.Title>SEO</Card.Title>
                              <Card.Text>
                                   This is a wider card with supporting text below as a natural lead-in
                                   to additional content. This card has even longer content than the
                                   first to show that equal height action.
                              </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                              <a href='/m' className="text-muted text-decoration-none ">Read more ...</a>
                         </Card.Footer>
                    </Card>
                    <Card className='shadow'>
                         <Card.Img variant="top" src={require("../../../../Images/8.png")} />
                         <Card.Body>
                              <Card.Title>Content Marketing</Card.Title>
                              <Card.Text>
                                   This is a wider card with supporting text below as a natural lead-in
                                   to additional content. This card has even longer content than the
                                   first to show that equal height action.
                              </Card.Text>
                         </Card.Body>
                         <Card.Footer>
                              <a href='/m' className="text-muted text-decoration-none ">Read more ...</a>
                         </Card.Footer>
                    </Card>
               </CardGroup>
          </section>
     );
}

export default Container;