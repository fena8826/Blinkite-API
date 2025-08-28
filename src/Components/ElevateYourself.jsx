import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";

const products = [
  {
    id: 1,
    title: "Portronics Type-A To Type-C Cable",
    weight: "1 pc",
    price: 169,
    oldPrice: 599,
    discount: "SAVE ₹430",
    rating: 3.9,
    reviews: 345,
    image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/6f3a450a-d567-49eb-ad54-7ccff0edf356.jpeg",
  },
  {
    id: 2,
    title: "Agaro Dual Channel Tens Massager",
    weight: "1 set",
    price: 1682,
    oldPrice: 4999,
    discount: "SAVE ₹3.3K",
    rating: 4.4,
    reviews: 183,
    image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/9b8420a7-c81a-4d85-9233-a5f69d6d0613.jpg",
  },
  {
    id: 3,
    title: "Agaro Rejoice Foot, Calf And Leg Massager",
    weight: "1 pc",
    price: 13499,
    oldPrice: 37999,
    discount: "SAVE ₹24.5K",
    rating: 4.5,
    reviews: 728,
    emi: "₹1294/month EMI",
    image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/383d8261-caef-4a8a-b076-945988464177.jpg",
  },
  {
    id: 4,
    title: "Lifelong Head and Body Massager",
    weight: "1 pc",
    price: 849,
    oldPrice: 2300,
    discount: "SAVE ₹1.5K",
    rating: 4.6,
    reviews: 414,
    image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1000-1000,pr-true,f-auto,q-80/inventory/product/c0b348d8-9b48-4878-ac72-914ebb1e11a6-/tmp/20230918-1639481.jpeg",
  },
  {
    id: 5,
    title: "Portronics 65W Fast Charger",
    weight: "1 pc",
    price: 1224,
    oldPrice: 2999,
    discount: "SAVE ₹1.8K",
    rating: 4.6,
    reviews: 508,
    image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/d03426f4-c376-4e02-a732-cbabadb25ebf.jpg",
  },
  {
    id: 6,
    title: "Agaro Magma Air Compression Leg Massager",
    weight: "1 pc",
    price: 6699,
    oldPrice: 19995,
    discount: "SAVE ₹13.3K",
    rating: 3.8,
    reviews: 1100,
    emi: "₹642/month EMI",
    image: "https://cdn.zeptonow.com/production/tr:w-403,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/aa788591-e22b-441d-9b2a-3bc3093b9981.jpg",
  },
];

const ElevateYourself = () => {
  return (
    <Container className="my-4">
      <h5 className="fw-bolder mb-4 text-danger">Elevate Yourself</h5>
      <Row>
        {products.map((prod) => (
          <Col key={prod.id} xs={12} sm={6} md={4} className="mb-4">
            <Card
              style={{
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                height: "100%",
                position: "relative",
              }}
              className="p-3"
            >
       
              {prod.discount && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#d32f2f",
                    color: "#fff",
                    fontSize: "11px",
                    padding: "2px 6px",
                    borderRadius: "3px",
                    top: "8px",
                    left: "8px",
                  }}
                >
                  {prod.discount}
                </div>
              )}

            
              <Card.Img
                variant="top"
                src={prod.image}
                style={{
                  height: "160px",
                  objectFit: "contain",
                  marginBottom: "12px",
                }}
              />

              <Card.Body className="p-0">
             
                <Card.Title
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    minHeight: "40px",
                  }}
                >
                  {prod.title}
                </Card.Title>

              
                <p style={{ fontSize: "12px", color: "gray", margin: 0 }}>
                  {prod.weight}
                </p>

                <div className="d-flex justify-content-between align-items-center mt-2 mb-2">
                  <div>
                    <span className="fw-bold fs-6">₹{prod.price}</span>
                    {prod.oldPrice && (
                      <small
                        style={{
                          textDecoration: "line-through",
                          color: "gray",
                          marginLeft: "6px",
                        }}
                      >
                        ₹{prod.oldPrice}
                      </small>
                    )}
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    style={{
                      fontWeight: "600",
                      borderRadius: "6px",
                      padding: "2px 14px",
                    }}
                  >
                    ADD
                  </Button>
                </div>

         
                {prod.emi && (
                  <p style={{ color: "red", fontSize: "12px", margin: 0 }}>
                    {prod.emi}
                  </p>
                )}

          
                <div
                  className="d-flex align-items-center mt-2"
                  style={{ fontSize: "13px", color: "red" }}
                >
                  <BsStarFill size={13} className="me-1" />
                  {prod.rating} ★ ({prod.reviews} reviews)
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ElevateYourself;
