import Card from 'react-bootstrap/Card';

const Footer = () => {
    return (
        <>
            <section className="ftr w-100 px-4 m-auto my-3">
                <Card>
                    <Card.Img variant="top" src={require("../../Images/9.png")} />
                    <Card.Body className='shadow'>
                        <Card.Text className='text-center fs-6'>
                            ©️ Mohsen Ghandali 2023
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </>
    );
}

export default Footer;