import React from 'react'
import { Carousel } from 'react-bootstrap'

const Testimonials = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/woman-testimonial-1.png')}
            alt="Woman wearing a pink crop top smiling with her arm lightly resting against her head."
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/man-testimonial-2.png')}
            alt="A young man wearing glasses, a two tone blue jacket, looking to the right."
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/woman-testimonial-3.png')}
            alt="A woman sitting and smiling looking directly at the camera. She is wearing a black blazer."
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/man-testimonial-4.png')}
            alt="A man wearing sunglasses standing forward smiling to the camera. He is wearing a black jacket with a white shirt."
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/woman-testimonial-5.png')}
            alt="A woman with curly hair smiling at the camera."
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/woman-testimonial-6.png')}
            alt="A woman wearing a white sweater, glasses and smiling with a colorful wall behind her."
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/man-testimonial-7.png')}
            alt="A man wearing a hat and sunglasses looking to his right."
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/woman-testimonial-8.png')}
            alt="A woman with long brown hair, smiling with a laptop in front of her."
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/woman-testimonial-9.png')}
            alt="A woman with short brown hair, sitting on her bed with a book in her hand."
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 testimonial-img"
            src={require('../../assets/img/man-testimonial-10.png')}
            alt="A man with blonde curly hair wearing a hat smiling at the camera."
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Testimonials