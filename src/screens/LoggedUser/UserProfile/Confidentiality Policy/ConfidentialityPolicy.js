import React, { Fragment } from "react";
import BackArrow from "../../../../UI/Buttons/BackArrow";
import classes from "./ConfidentialityPolicy.module.css";

function ConfidentialityPolicy() {
  return (
    <Fragment>
      <BackArrow />
      <div className={classes.confidentialityPolicyPage}>
        <p className={classes.confidentialityTitle}> Confidentiality Policy </p>
        <div className={classes.confidentialityText}>
          <p>
            {" "}
            All interactions which take place in the setting of therapy are
            considered confidential. This includes requests by telephone, all
            interactions with this counselor, any scheduling or appointment
            notes, all session content records and any progress notes that I
            take during your sessions. I will not even verify that you are a
            client. You may choose to give me permission in writing to release
            any or specific information about you to any person or agency that
            you designate.{" "}
          </p>
          <p>Limits to this agreement</p>
          <p>
            1. In some legal proceedings a judge may issue a court order. This
            would require this counselor to testify in court.{" "}
          </p>
          <p>
            {" "}
            2. If I learn of or believe that there is physical or sexual abuse
            or neglect of any person under 18 years of age, I must report this
            information to county child protection services.{" "}
          </p>
          <p>
            {" "}
            3. If I learn of or believe that an elderly person, or disabled
            person is being abused or neglected, I must file a report with the
            appropriate state agency that handles elder abuse.{" "}
          </p>
          <p>
            {" "}
            4. If I learn of or believe that you are threatening serious harm to
            another person, I am obligated to report this.{" "}
          </p>
          <p>
            {" "}
            5. This can be in the form of telling the person who you have
            threatened, contacting the police or placing you into
            hospitalization. If there is evidence that you are a danger to
            yourself and I believe that you are likely to kill yourself unless
            protective measure are taken, I may be obligated to seek
            hospitalization for you or to contact family members or others who
            can help provide protection.{" "}
          </p>
          <p>
            {" "}
            6. There may be times when I consult with outside sources about
            cases. In these cases, no personally identifiable information will
            be used to discuss this case. However, discussion topics will be
            used in order to ensure that I am getting and giving the best
            assistance possible. The persons with whom I discuss cases are
            legally bound to keep information confidential.
          </p>
          <p>
            Phasellus sed arcu eu mauris euismod feugiat. Etiam consectetur,
            purus in cursus gravida, leo lectus euismod urna, in maximus ante
            mauris eu massa. Nullam convallis scelerisque velit, nec rutrum
            lorem ultricies blandit. Pellentesque eu nibh quis risus laoreet
            tristique sed at ex. Praesent faucibus malesuada lorem nec
            fringilla. Mauris feugiat scelerisque nibh vitae congue.
          </p>
          <p>
            {" "}
            Nullam egestas est a urna laoreet, ut iaculis purus luctus. Praesent
            ornare ultrices diam nec tincidunt. Quisque erat erat, pharetra vel
            ipsum vitae, porttitor tempor leo. Etiam molestie fringilla ex, eget
            porttitor ligula feugiat eu. Quisque quis tempus quam. Nunc
            facilisis efficitur mauris nec fringilla. Morbi vestibulum pulvinar
            ligula, id vehicula ipsum efficitur sit amet.
          </p>
          <p>
            Quisque a ex eget est eleifend auctor. Proin ex felis, convallis
            eget ipsum sed, ornare accumsan libero. Vivamus gravida efficitur
            eros, non viverra nisl bibendum at. Nullam eleifend tellus vitae
            enim finibus lacinia. Fusce nec venenatis ante. Sed fermentum
            dapibus dapibus. Sed lacus lorem, vulputate nec rhoncus in, egestas
            vitae dolor. Maecenas egestas elit nec neque pellentesque, mattis
            scelerisque metus consectetur. Nam euismod, risus et tempus
            condimentum, diam ligula ultrices turpis, vel malesuada nulla sem a
            lectus.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default ConfidentialityPolicy;
