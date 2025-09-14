export default function InformationPage() {
  return (
    <section className="information-page-container">
      <h1>About sofia</h1>
      <p className="info-p1">
        Sofia Parazi is a photographer, art director, and filmmaker based in Los
        Angeles. Raised in the south of Italy, Sofia Pazari was drawn to
        spending as much time as possible outdoors. Sofia’s photos use natural
        light as a callback to a childhood spent basking in the sun 
      </p>
      <p className="info-p2">
        Sofia is
        based in Los Angeles, CA. For business inquiries, feel free to contact
        her.
      </p>
      <form action="">
        <fieldset>
            <span>Name</span>
            <label htmlFor="name"><span>First Name</span> <span>(required)</span></label>
            <input type="text" id="name" />
            <label htmlFor="surname"><span>Last Name</span></label>
            <input type="text" id="surname" />
            
        </fieldset>
        <label htmlFor="email"><span>Email</span> <span>(required)</span></label>
            <input type="text" name="" id="" />
            <label htmlFor="message"><span>Message</span><span>(required)</span></label>
            <input type="text" name="" id="" />
            <button type="submit">Submit</button>

      </form>
            <img src="/information.webp" alt="" />

    </section>
  );
}
