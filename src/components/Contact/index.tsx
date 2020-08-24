import React, { useState } from "react"
import styled from "../../styled"
import { navigate } from "gatsby-link"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Socials from "../Socials"

const ContactContainer = styled.div`
  padding: 0 2rem 0 2rem;
  max-width: 31.25rem;
  margin: 0 auto;
  height: 100%;
  display: grid;
  align-content: center;
`

const SocialContainer = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`

const ContactHeading = styled.h1`
  text-align: center;
`

const Input = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.action};
  width: 100%;
`

const TextArea = styled.textarea`
  background-color: transparent;
  color: ${props => props.theme.colors.action};
  width: 100%;
`

const EmailLink = styled(OutboundLink)`
  color: ${props => props.theme.colors.action};
`

const FormActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
`

const Button = styled.button`
  width: 6.25rem;

  &:hover {
    cursor: pointer;
  }
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

/**
 * The form component was heavily inspired by https://github.com/sw-yx/gatsby-netlify-form-example-v2/blob/master/src/pages/contact.js
 *
 * @returns
 */
const Contact = () => {
  const [state, setState] = useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      // TODO: handle error
      .catch(error => alert(error))
  }
  return (
    <ContactContainer>
      <ContactHeading>CONTACT</ContactHeading>
      <SocialContainer>
        <Socials />
      </SocialContainer>
      <form
        action={`/contact-success/`}
        data-netlify="true"
        method="POST"
        name="contact-us"
        data-netlify-honeypot="bot-field"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>*NAME:</label>
          <Input type="text" name="name" required />
        </p>
        <p>
          <label>*E-MAIL:</label>
          <Input type="email" name="email" required />
        </p>
        <p>
          <label>PHONE NUMBER:</label>
          <Input type="tel" name="tel" />
        </p>
        <p>
          <label htmlFor="message">MESSAGE:</label>
          <TextArea name="message" id="message" />
        </p>
        <FormActionContainer>
          <Button type="submit">SEND</Button>
        </FormActionContainer>
      </form>
    </ContactContainer>
  )
}

export default Contact
