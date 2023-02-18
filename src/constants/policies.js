import {
  HStack,
  ListItem,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const gdprTable = [
  {
    ctg: 'A. Identifiers',
    ex: 'Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name',
    collected: 'No',
  },
  {
    ctg: 'B. Personal information categories listed in the California Customer Records statute',
    ex: 'Name, contact information, education, employment, employment history, and financial information',
    collected: 'No',
  },
  {
    ctg: 'C. Protected classification characteristics under California or federal law',
    ex: 'Gender and date of birth ',
    collected: 'No',
  },
  {
    ctg: 'D. Commercial information',
    ex: 'Transaction information, purchase history, financial details, and payment information',
    collected: 'No',
  },
  {
    ctg: 'E. Biometric information ',
    ex: 'Fingerprints and voiceprints ',
    collected: 'No',
  },
  {
    ctg: 'F. Internet or other similar network activity',
    ex: 'Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements',
    collected: 'No',
  },
  {
    ctg: 'G. Geolocation data ',
    ex: 'Device location ',
    collected: 'No',
  },
  {
    ctg: 'H. Audio, electronic, visual, thermal, olfactory, or similar information',
    ex: 'Images and audio, video or call recordings created in connection with our business activities',
    collected: 'No',
  },
  {
    ctg: 'I. Professional or employment-related information',
    ex: 'Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us',
    collected: 'No',
  },
  {
    ctg: 'J. Education Information ',
    ex: 'Student records and directory information ',
    collected: 'No',
  },
  {
    ctg: 'K. Inferences drawn from other personal information',
    ex: 'Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics',
    collected: 'No',
  },
  {
    ctg: 'L. Sensitive Personal Information ',
    ex: '',
    collected: 'No',
  },
];
export const gdprText = [
  {
    title: 'SUMMARY OF KEY POINTS',
    text: [
      <strong>
        This summary provides key points from our privacy notice, but you can
        find out more details about any of these topics by clicking the link
        following each key point or by using our table of contents below to find
        the section you are looking for. You can also click here to go directly
        to our table of contents.
      </strong>,
      <p>
        <strong>What personal information do we process? </strong>When you
        visit, use, or navigate our Services, we may process personal
        information depending on how you interact with Autopost SRL and the
        Services, the choices you make, and the products and features you use.{' '}
      </p>,
      <p>
        <strong>Do we process any sensitive personal information?</strong>We do
        not process sensitive personal information.
      </p>,
      <p>
        <strong>Do we receive any information from third parties? </strong>We do
        not receive any information from third parties.
      </p>,
      <p>
        <strong>How do we process your information? </strong>We process your
        information to provide, improve, and administer our Services,
        communicate with you, for security and fraud prevention, and to comply
        with law. We may also process your information for other purposes with
        your consent. We process your information only when we have a valid
        legal reason to do so.{' '}
      </p>,
      <p>
        <strong>
          In what situations and with which parties do we share personal
          information?
        </strong>
        We may share information in specific situations and with specific third
        parties.
      </p>,
      <p>
        <strong>How do we keep your information safe?</strong>We have
        organisational and technical processes and procedures in place to
        protect your personal information. However, no electronic transmission
        over the internet or information storage technology can be guaranteed to
        be 100% secure, so we cannot promise or guarantee that hackers,
        cybercriminals, or other unauthorised third parties will not be able to
        defeat our security and improperly collect, access, steal, or modify
        your information.
      </p>,
      <p>
        <strong>What are your rights? </strong>Depending on where you are
        located geographically, the applicable privacy law may mean you have
        certain rights regarding your personal information.{' '}
      </p>,
      <p>
        <strong>How do you exercise your rights? </strong>The easiest way to
        exercise your rights is by filling out our data subject request by
        contacting us. We will consider and act upon any request in accordance
        with applicable data protection laws.{' '}
      </p>,
    ],
  },
  {
    title: '1. WHAT INFORMATION DO WE COLLECT?',
    text: [
      <strong>Personal information you disclose to us.</strong>,
      <p>
        <strong>In Short: </strong>We collect personal information that you
        provide to us.
      </p>,
      <p>
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </p>,
      <p>
        <strong>Personal Information Provided by You. </strong>The personal
        information that we collect depends on the context of your interactions
        with us and the Services, the choices you make, and the products and
        features you use. The personal information we collect may include the
        following:
      </p>,
      <HStack>
        <UnorderedList>
          <ListItem>debit/credit card numbers</ListItem>
          <ListItem>billing addresses</ListItem>
          <ListItem>contact or authentication data</ListItem>
          <ListItem>contact preferences</ListItem>
          <ListItem>names</ListItem>
          <ListItem>phone numbers</ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>email addresses</ListItem>
          <ListItem>mailing addresses</ListItem>
          <ListItem>job titles</ListItem>
          <ListItem>usernames</ListItem>
          <ListItem>passwords</ListItem>
        </UnorderedList>
      </HStack>,
      <p>
        <strong>Sensitive Information. </strong>We do not process sensitive
        information.
      </p>,
      <p>
        <strong>Payment Data. </strong>We may collect data necessary to process
        your payment if you make purchases, such as your payment instrument
        number, and the security code associated with your payment instrument.
        All payment data is stored by Stripe and PayPal. You may find their
        privacy notice link(s) here:{' '}
        <a
          target="_blank"
          aria-label="Stripe"
          rel="noreferrer"
          href="https://stripe.com/enro/legal/privacy-center"
        >
          https://stripe.com/enro/legal/privacy-center
        </a>{' '}
        and{' '}
        <a
          target="_blank"
          aria-label="Paypal"
          rel="noreferrer"
          href="https://www.paypal.com/myaccount/privacy/privacyhub"
        >
          https://www.paypal.com/myaccount/privacy/privacyhub
        </a>
        .
      </p>,
      <p>
        <strong>Social Media Login Data. </strong>We may provide you with the
        option to register with us using your existing social media account
        details, like your Facebook, Twitter, or other social media account. If
        you choose to register in this way, we will collect the information
        described in the section called 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?'
        below.
      </p>,
      <p>
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>,
      <p>
        <strong>Information automatically collected</strong>
      </p>,
      <p>
        <strong>In Short: </strong>Some information — such as your Internet
        Protocol (IP) address and/or browser and device characteristics — is
        collected automatically when you visit our Services.
      </p>,
      <p>
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
      </p>,
      <p>
        Like many businesses, we also collect information through cookies and
        similar technologies. You can find out more about this in our Cookie
        Notice:{' '}
        <Link to="https://autopost.ro/cookies.">
          https://autopost.ro/cookies.
        </Link>
      </p>,
      <p>The information we collect includes:</p>,
      <UnorderedList>
        <ListItem>
          {' '}
          Log and Usage Data. Log and usage data is service-related, diagnostic,
          usage, and performance information our servers automatically collect
          when you access or use our Services and which we record in log files.
          Depending on how you interact with us, this log data may include your
          IP address, device information, browser type, and settings and
          information about your activity in the Services (such as the date/time
          stamps associated with your usage, pages and files viewed, searches,
          and other actions you take such as which features you use), device
          event information (such as system activity, error reports (sometimes
          called 'crash dumps'), and hardware settings).
        </ListItem>
        <ListItem>
          Device Data. We collect device data such as information about your
          computer, phone, tablet, or other device you use to access the
          Services. Depending on the device used, this device data may include
          information such as your IP address (or proxy server), device and
          application identification numbers, location, browser type, hardware
          model, Internet service provider and/or mobile carrier, operating
          system, and system configuration information.
        </ListItem>
        <ListItem>
          Location Data. We collect location data such as information about your
          device's location, which can be either precise or imprecise. How much
          information we collect depends on the type and settings of the device
          you use to access the Services. For example, we may use GPS and other
          technologies to collect geolocation data that tells us your current
          location (based on your IP address). You can opt out of allowing us to
          collect this information either by refusing access to the information
          or by disabling your Location setting on your device. However, if you
          choose to opt out, you may not be able to use certain aspects of the
          Services.
        </ListItem>
      </UnorderedList>,
      <p>
        <strong>
          Information collected when you use our Facebook application(s).{' '}
        </strong>
        We by default access your Facebook basic account information, including
        your name, email, gender, birthday, current city, and profile picture
        URL, as well as other information that you choose to make public. We may
        also request access to other permissions related to your account, such
        as friends, check-ins, and likes, and you may choose to grant or deny us
        access to each individual permission. For more information regarding
        Facebook permissions, refer to the{' '}
        <a
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
          href="https://developers.facebook.com/docs/permissions/reference"
        >
          Facebook Permissions Reference
        </a>{' '}
        page.
      </p>,
    ],
  },
  {
    title: '2. HOW DO WE PROCESS YOUR INFORMATION?',
    text: [
      <p>
        <strong>In Short: </strong>We process your information to provide,
        improve, and administer our Services, communicate with you, for security
        and fraud prevention, and to comply with law. We may also process your
        information for other purposes with your consent.
      </p>,
      <p>
        <strong>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </strong>
      </p>,
      <HStack>
        <UnorderedList>
          <ListItem>
            <strong>
              To facilitate account creation and authentication and otherwise
              manage user accounts.{' '}
            </strong>
            We may process your information so you can create and log in to your
            account, as well as keep your account in working order.
          </ListItem>
          <ListItem>
            To deliver and facilitate delivery of services to the user. We may
            process your information to provide you with the requested service.
          </ListItem>
          <ListItem>
            To respond to user inquiries/offer support to users. We may process
            your information to respond to your inquiries and solve any
            potential issues you might have with the requested service.
          </ListItem>
          <ListItem>
            To send administrative information to you. We may process your
            information to send you details about our products and services,
            changes to our terms and policies, and other similar information.
          </ListItem>
          <ListItem>
            To fulfill and manage your orders. We may process your information
            to fulfill and manage your orders, payments, returns, and exchanges
            made through the Services.
          </ListItem>
          <ListItem>
            To request feedback. We may process your information when necessary
            to request feedback and to contact you about your use of our
            Services.
          </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>
            To send you marketing and promotional communications. We may process
            the personal information you send to us for our marketing purposes,
            if this is in accordance with your marketing preferences. You can
            opt out of our marketing emails at any time. For more information,
            see 'WHAT ARE YOUR PRIVACY RIGHTS?' below.
          </ListItem>
          <ListItem>
            To deliver targeted advertising to you. We may process your
            information to develop and display personalised content and
            advertising tailored to your interests, location, and more. For more
            information see our Cookie Notice:{' '}
            <Link to="https://autopost.ro/cookies">
              https://autopost.ro/cookies
            </Link>
            .
          </ListItem>
          <ListItem>
            To protect our Services. We may process your information as part of
            our efforts to keep our Services safe and secure, including fraud
            monitoring and prevention.
          </ListItem>
          <ListItem>
            To identify usage trends. We may process information about how you
            use our Services to better understand how they are being used so we
            can improve them.
          </ListItem>
          <ListItem>
            To determine the effectiveness of our marketing and promotional
            campaigns. We may process your information to better understand how
            to provide marketing and promotional campaigns that are most
            relevant to you.
          </ListItem>
          <ListItem>
            To save or protect an individual's vital interest. We may process
            your information when necessary to save or protect an individual’s
            vital interest, such as to prevent harm.
          </ListItem>
        </UnorderedList>
      </HStack>,
    ],
  },
  {
    title: '3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?',
    text: [
      <p>
        <strong>In Short: </strong>We only process your personal information
        when we believe it is necessary and we have a valid legal reason (i.e.
        legal basis) to do so under applicable law, like with your consent, to
        comply with laws, to provide you with services to enter into or fulfill
        our contractual obligations, to protect your rights, or to fulfilll our
        legitimate business interests.
      </p>,
      <p>
        The General Data Protection Regulation (GDPR) and UK GDPR require us to
        explain the valid legal bases we rely on in order to process your
        personal information. As such, we may rely on the following legal bases
        to process your personal information:
      </p>,
      <UnorderedList>
        <ListItem>
          Consent. We may process your information if you have given us
          permission (i.e. consent) to use your personal information for a
          specific purpose. You can withdraw your consent at any time.
        </ListItem>
        <ListItem>
          Performance of a Contract. We may process your personal information
          when we believe it is necessary to fulfill our contractual obligations
          to you, including providing our Services or at your request prior to
          entering into a contract with you.
        </ListItem>
        <ListItem>
          Legitimate Interests. We may process your information when we believe
          it is reasonably necessary to achieve our legitimate business
          interests and those interests do not outweigh your interests and
          fundamental rights and freedoms. For example, we may process your
          personal information for some of the purposes described in order to:
          <UnorderedList>
            <ListItem>
              Send users information about special offers and discounts on our
              products and services
            </ListItem>
            <ListItem>
              Develop and display personalised and relevant advertising content
              for our users
            </ListItem>
            <ListItem>
              Analyse how our Services are used so we can improve them to engage
              and retain users
            </ListItem>
            <ListItem>Support our marketing activities</ListItem>
            <ListItem>
              Diagnose problems and/or prevent fraudulent activities
            </ListItem>
            <ListItem>
              Understand how our users use our products and services so we can
              improve user experience
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>
          Legal Obligations. We may process your information where we believe it
          is necessary for compliance with our legal obligations, such as to
          cooperate with a law enforcement body or regulatory agency, exercise
          or defend our legal rights, or disclose your information as evidence
          in litigation in which we are involved.
        </ListItem>
        <ListItem>
          Vital Interests. We may process your information where we believe it
          is necessary to protect your vital interests or the vital interests of
          a third party, such as situations involving potential threats to the
          safety of any person.
        </ListItem>
      </UnorderedList>,
    ],
  },
  {
    title: '4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
    text: [
      <p>
        <strong>In Short: </strong>We may share information in specific
        situations described in this section and/or with the following third
        parties.
      </p>,
      <p>
        {' '}
        We may need to share your personal information in the following
        situations:
      </p>,
      <UnorderedList>
        <ListItem>
          Business Transfers. We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </ListItem>
      </UnorderedList>,
    ],
  },
  {
    title: '5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
    text: [
      <p>
        <strong>In Short: </strong>We may use cookies and other tracking
        technologies to collect and store your information.
      </p>,
      <p>
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our Cookie Notice:{' '}
        <Link to="https://autopost.ro/cookies">
          https://autopost.ro/cookies
        </Link>
        .
      </p>,
    ],
  },
  {
    title: '6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?',
    text: [
      <p>
        <strong>In Short: </strong>If you choose to register or log in to our
        Services using a social media account, we may have access to certain
        information about you. Our Services offer you the ability to register
        and log in using your third-party social media account details (like
        your Facebook or Twitter logins). Where you choose to do this, we will
        receive certain profile information about you from your social media
        provider. The profile information we receive may vary depending on the
        social media provider concerned, but will often include your name, email
        address, friends list, and profile picture, as well as other information
        you choose to make public on such a social media platform. If you log in
        using Facebook, we may also request access to other permissions related
        to your account, such as your friends, check-ins, and likes, and you may
        choose to grant or deny us access to each individual permission.
      </p>,
      <p>
        We will use the information we receive only for the purposes that are
        described in this privacy notice or that are otherwise made clear to you
        on the relevant Services. Please note that we do not control, and are
        not responsible for, other uses of your personal information by your
        third-party social media provider. We recommend that you review their
        privacy notice to understand how they collect, use, and share your
        personal information, and how you can set your privacy preferences on
        their sites and apps.
      </p>,
    ],
  },
  {
    title: '7. HOW LONG DO WE KEEP YOUR INFORMATION?',
    text: [
      <p>
        <strong>In Short: </strong>We keep your information for as long as
        necessary to fulfill the purposes outlined in this privacy notice unless
        otherwise required by law.
      </p>,
      <p>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this privacy notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). No purpose in this notice will
        require us keeping your personal information for longer than sixty (60)
        months past the termination of the user's account.
      </p>,
      <p>
        When we have no ongoing legitimate business need to process your
        personal information, we will either delete or anonymise such
        information, or, if this is not possible (for example, because your
        personal information has been stored in backup archives), then we will
        securely store your personal information and isolate it from any further
        processing until deletion is possible.
      </p>,
    ],
  },
  {
    title: '8. HOW DO WE KEEP YOUR INFORMATION SAFE?',
    text: [
      <p>
        <strong>In Short: </strong>We aim to protect your personal information
        through a system of organisational and technical security measures.
      </p>,
      <p>
        We have implemented appropriate and reasonable technical and
        organisational security measures designed to protect the security of any
        personal information we process. However, despite our safeguards and
        efforts to secure your information, no electronic transmission over the
        Internet or information storage technology can be guaranteed to be 100%
        secure, so we cannot promise or guarantee that hackers, cyber criminals,
        or other unauthorised third parties will not be able to defeat our
        security and improperly collect, access, steal, or modify your
        information. Although we will do our best to protect your personal
        information, transmission of personal information to and from our
        Services is at your own risk. You should only access the Services within
        a secure environment.
      </p>,
    ],
  },
  {
    title: '9. DO WE COLLECT INFORMATION FROM MINORS?',
    text: [
      <p>
        <strong>In Short: </strong>We do not knowingly collect data from or
        market to children under 18 years of age.
      </p>,
      <p>
        We do not knowingly solicit data from or market to children under 18
        years of age. By using the Services, you represent that you are at least
        18 or that you are the parent or guardian of such a minor and consent to
        such minor dependent’s use of the Services. If we learn that personal
        information from users less than 18 years of age has been collected, we
        will deactivate the account and take reasonable measures to promptly
        delete such data from our records. If you become aware of any data we
        may have collected from children under age 18, please contact us at
        catalin@peakngo.com.
      </p>,
    ],
  },
  {
    title: '10. WHAT ARE YOUR PRIVACY RIGHTS?',
    text: [
      <p>
        <strong>In Short: </strong>In some regions, such as the European
        Economic Area (EEA) and United Kingdom (UK), you have rights that allow
        you greater access to and control over your personal information. You
        may review, change, or terminate your account at any time.
      </p>,
      <p>
        In some regions (like the EEA and UK), you have certain rights under
        applicable data protection laws. These may include the right (i) to
        request access and obtain a copy of your personal information, (ii) to
        request rectification or erasure; (iii) to restrict the processing of
        your personal information; and (iv) if applicable, to data portability.
        In certain circumstances, you may also have the right to object to the
        processing of your personal information. You can make such a request by
        contacting us by using the contact details provided in the section 'HOW
        CAN YOU CONTACT US ABOUT THIS NOTICE?' below.
      </p>,
      <p>
        We will consider and act upon any request in accordance with applicable
        data protection laws.
      </p>,
      <p>
        If you are located in the EEA or UK and you believe we are unlawfully
        processing your personal information, you also have the right to
        complain to your local data protection supervisory authority. You can
        find their contact details here:{' '}
        <a
          target="_blank"
          aria-label="Europa"
          rel="noreferrer"
          href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
        >
          https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
        </a>
        .
      </p>,
      <p>
        If you are located in Switzerland, the contact details for the data
        protection authorities are available here:{' '}
        <a
          target="_blank"
          aria-label="Edoeb"
          rel="noreferrer"
          href="https://www.edoeb.admin.ch/edoeb/en/home.html"
        >
          https://www.edoeb.admin.ch/edoeb/en/home.html
        </a>
      </p>,
      <p>
        <strong>Withdrawing your consent: </strong>If we are relying on your
        consent to process your personal information, you have the right to
        withdraw your consent at any time. You can withdraw your consent at any
        time by contacting us by using the contact details provided in the
        section 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' below or updating
        your preferences.
      </p>,
      <p>
        However, please note that this will not affect the lawfulness of the
        processing before its withdrawal nor, will it affect the processing of
        your personal information conducted in reliance on lawful processing
        grounds other than consent.
      </p>,
      <p>
        <strong>
          Opting out of marketing and promotional communications:{' '}
        </strong>
        You can unsubscribe from our marketing and promotional communications at
        any time by clicking on the unsubscribe link in the emails that we send,
        or by contacting us using the details provided in the section 'HOW CAN
        YOU CONTACT US ABOUT THIS NOTICE?' below. You will then be removed from
        the marketing lists. However, we may still communicate with you — for
        example, to send you service-related messages that are necessary for the
        administration and use of your account, to respond to service requests,
        or for other non-marketing purposes.
      </p>,
      <p>
        <strong>Account Information</strong>
      </p>,
      <p>
        If you would at any time like to review or change the information in
        your account or terminate your account, you can:
      </p>,
      <UnorderedList>
        <ListItem>
          Log in to your account settings and update your user account.
        </ListItem>
        <ListItem>Contact us using the contact information provided.</ListItem>
      </UnorderedList>,
      <p>
        Upon your request to terminate your account, we will deactivate or
        delete your account and information from our active databases. However,
        we may retain some information in our files to prevent fraud,
        troubleshoot problems, assist with any investigations, enforce our legal
        terms and/or comply with applicable legal requirements.
      </p>,
      <p>
        <strong>Cookies and similar technologies: </strong> Most Web browsers
        are set to accept cookies by default. If you prefer, you can usually
        choose to set your browser to remove cookies and to reject cookies. If
        you choose to remove cookies or reject cookies, this could affect
        certain features or services of our Services. To opt out of
        interest-based advertising by advertisers on our Services visit{' '}
        <a
          target="_blank"
          aria-label="Europa"
          rel="noreferrer"
          href="http://www.aboutads.info/choices/"
        >
          http://www.aboutads.info/choices/
        </a>
        . For further information, please see our Cookie Notice:{' '}
        <Link to="https://autopost.ro/cookies">
          https://autopost.ro/cookies
        </Link>
        .
      </p>,
      <p>
        If you have questions or comments about your privacy rights, you may
        email us at <a href="mailto:gdpr@autopost.ro">gdpr@autopost.ro</a>.
      </p>,
    ],
  },
  {
    title: '11. CONTROLS FOR DO-NOT-TRACK FEATURES',
    text: [
      <p>
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track ('DNT') feature or setting you can
        activate to signal your privacy preference not to have data about your
        online browsing activities monitored and collected. At this stage no
        uniform technology standard for recognising and implementing DNT signals
        has been finalised. As such, we do not currently respond to DNT browser
        signals or any other mechanism that automatically communicates your
        choice not to be tracked online. If a standard for online tracking is
        adopted that we must follow in the future, we will inform you about that
        practice in a revised version of this privacy notice.
      </p>,
    ],
  },
  {
    title: '12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
    text: [
      <p>
        <strong>In Short: </strong>Yes, if you are a resident of California, you
        are granted specific rights regarding access to your personal
        information.
      </p>,
      <p>
        California Civil Code Section 1798.83, also known as the 'Shine The
        Light' law, permits our users who are California residents to request
        and obtain from us, once a year and free of charge, information about
        categories of personal information (if any) we disclosed to third
        parties for direct marketing purposes and the names and addresses of all
        third parties with which we shared personal information in the
        immediately preceding calendar year. If you are a California resident
        and would like to make such a request, please submit your request in
        writing to us using the contact information provided below.
      </p>,
      <p>
        If you are under 18 years of age, reside in California, and have a
        registered account with Services, you have the right to request removal
        of unwanted data that you publicly post on the Services. To request
        removal of such data, please contact us using the contact information
        provided below and include the email address associated with your
        account and a statement that you reside in California. We will make sure
        the data is not publicly displayed on the Services, but please be aware
        that the data may not be completely or comprehensively removed from all
        our systems (e.g. backups, etc.).
      </p>,
      <p>
        <strong>CCPA Privacy Notice</strong>
      </p>,
      <p>The California Code of Regulations defines a 'resident' as:</p>,
      <UnorderedList>
        <ListItem>
          (1) every individual who is in the State of California for other than
          a temporary or transitory purpose and
        </ListItem>
        <ListItem>
          (2) every individual who is domiciled in the State of California who
          is outside the State of California for a temporary or transitory
          purpose
        </ListItem>
      </UnorderedList>,
      <p>All other individuals are defined as 'non-residents'.</p>,
      <p>
        If this definition of 'resident' applies to you, we must adhere to
        certain rights and obligations regarding your personal information.
      </p>,
      <p>
        <strong>What categories of personal information do we collect?</strong>
      </p>,
      <p>
        We have collected the following categories of personal information in
        the past twelve (12) months:
      </p>,
      <Table>
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>Examples</Th>
            <Th>Collected</Th>
          </Tr>
        </Thead>
        <Tbody>
          {gdprTable.map((item) => (
            <Tr>
              <Td>{item.ctg}</Td>
              <Td>{item.ex}</Td>
              <Td>{item.collected}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>,
      <p>
        We may also collect other personal information outside of these
        categories through instances where you interact with us in person,
        online, or by phone or mail in the context of:
      </p>,
      <UnorderedList>
        <ListItem>
          Receiving help through our customer support channels;
        </ListItem>
        <ListItem>Participation in customer surveys or contests; and</ListItem>
        <ListItem>
          Facilitation in the delivery of our Services and to respond to your
          inquiries.
        </ListItem>
      </UnorderedList>,
      <p>
        <strong>How do we use and share your personal information?</strong>
      </p>,
      <p>
        More information about our data collection and sharing practices can be
        found in this privacy notice and our Cookie Notice:{' '}
        <Link to="https://autopost.ro/cookies.">
          https://autopost.ro/cookies.
        </Link>
      </p>,
      <p>
        You may contact us by email at{' '}
        <a href="mailto:contact@autopost.ro">contact@autopost.ro</a>, or by
        referring to the contact details at the bottom of this document.
      </p>,
      <p>
        If you are using an authorised agent to exercise your right to opt out
        we may deny a request if the authorised agent does not submit proof that
        they have been validly authorised to act on your behalf.
      </p>,
      <p>
        <strong>Will your information be shared with anyone else?</strong>
      </p>,
      <p>
        We may disclose your personal information with our service providers
        pursuant to a written contract between us and each service provider.
        Each service provider is a for profit entity that processes the
        information on our behalf, following the same strict privacy protection
        obligations mandated by the CCPA. We may use your personal information
        for our own business purposes, such as for undertaking internal research
        for technological development and demonstration. This is not considered
        to be 'selling' of your personal information. Autopost SRL has not
        disclosed, sold, or shared any personal information to third parties for
        a business or commercial purpose in the preceding twelve (12) months.
        Autopost SRL will not sell or share personal information in the future
        belonging to website visitors, users, and other consumers.
      </p>,
      <p>
        <strong>Your rights with respect to your personal data.</strong>
      </p>,
      <p>
        <u>Right to request deletion of the data — Request to delete</u>
      </p>,
      <p>
        You can ask for the deletion of your personal information. If you ask us
        to delete your personal information, we will respect your request and
        delete your personal information, subject to certain exceptions provided
        by law, such as (but not limited to) the exercise by another consumer of
        his or her right to free speech, our compliance requirements resulting
        from a legal obligation, or any processing that may be required to
        protect against illegal activities.
      </p>,
      <p>
        <u>Right to be informed — Request to know</u>
      </p>,
      <p>Depending on the circumstances, you have a right to know:</p>,
      <UnorderedList>
        <ListItem>
          whether we collect and use your personal information;
        </ListItem>
        <ListItem>
          the categories of personal information that we collect;
        </ListItem>
        <ListItem>
          the purposes for which the collected personal information is used;
        </ListItem>
        <ListItem>
          whether we sell or share personal information to third parties;
        </ListItem>
        <ListItem>
          the categories of personal information that we sold, shared, or
          disclosed for a business purpose;
        </ListItem>
        <ListItem>
          the categories of third parties to whom the personal information was
          sold, shared, or disclosed for a business purpose;
        </ListItem>
        <ListItem>
          the business or commercial purpose for collecting, selling, or sharing
          personal information; and
        </ListItem>
        <ListItem>
          the specific pieces of personal information we collected about you.
        </ListItem>
      </UnorderedList>,
      <p>
        In accordance with applicable law, we are not obligated to provide or
        delete consumer information that is de-identified in response to a
        consumer request or to reidentify individual data to verify a consumer
        request.
      </p>,
      <p>
        <u>
          Right to Non-Discrimination for the Exercise of a Consumer’s Privacy
          Rights
        </u>
      </p>,
      <p>
        We will not discriminate against you if you exercise your privacy
        rights.
      </p>,
      <p>
        <u>
          Right to Limit Use and Disclosure of Sensitive Personal Information
        </u>
      </p>,
      <p>We do not process consumer's sensitive personal information.</p>,
      <p>
        <u>Verification process</u>
      </p>,
      <p>
        Upon receiving your request, we will need to verify your identity to
        determine you are the same person about whom we have the information in
        our system. These verification efforts require us to ask you to provide
        information so that we can match it with information you have previously
        provided us. For instance, depending on the type of request you submit,
        we may ask you to provide certain information so that we can match the
        information you provide with the information we already have on file, or
        we may contact you through a communication method (e.g. phone or email)
        that you have previously provided to us. We may also use other
        verification methods as the circumstances dictate.
      </p>,
      <p>
        We will only use personal information provided in your request to verify
        your identity or authority to make the request. To the extent possible,
        we will avoid requesting additional information from you for the
        purposes of verification. However, if we cannot verify your identity
        from the information already maintained by us, we may request that you
        provide additional information for the purposes of verifying your
        identity and for security or fraud-prevention purposes. We will delete
        such additionally provided information as soon as we finish verifying
        you.
      </p>,
      <p>
        <u>Other privacy rights</u>
      </p>,
      <UnorderedList>
        <ListItem>
          You may object to the processing of your personal information.
        </ListItem>
        <ListItem>
          You may request correction of your personal data if it is incorrect or
          no longer relevant, or ask to restrict the processing of the
          information.
        </ListItem>
        <ListItem>
          You can designate an authorised agent to make a request under the CCPA
          on your behalf. We may deny a request from an authorised agent that
          does not submit proof that they have been validly authorised to act on
          your behalf in accordance with the CCPA.
        </ListItem>
        <ListItem>
          You may request to opt out from future selling or sharing of your
          personal information to third parties. Upon receiving an opt-out
          request, we will act upon the request as soon as feasibly possible,
          but no later than fifteen (15) days from the date of the request
          submission.
        </ListItem>
      </UnorderedList>,
      <p>
        To exercise these rights, you can contact us by email at{' '}
        <a href="mailto:contact@autopost.ro,">contact@autopost.ro,</a> or by
        referring to the contact details at the bottom of this document. If you
        have a complaint about how we handle your data, we would like to hear
        from you.
      </p>,
    ],
  },
  {
    title: '13. DO WE MAKE UPDATES TO THIS NOTICE?',
    text: [
      <p>
        <strong>In Short: </strong>Yes, we will update this notice as necessary
        to stay compliant with relevant laws.
      </p>,
      <p>
        We may update this privacy notice from time to time. The updated version
        will be indicated by an updated 'Revised' date and the updated version
        will be effective as soon as it is accessible. If we make material
        changes to this privacy notice, we may notify you either by prominently
        posting a notice of such changes or by directly sending you a
        notification. We encourage you to review this privacy notice frequently
        to be informed of how we are protecting your information.
      </p>,
    ],
  },
  {
    title: '14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
    text: [
      <p>
        If you have questions or comments about this notice, you may contact our
        Data Protection Officer (DPO) , Istratoae Irinel Catalin, by email at{' '}
        <a href="emailto:catalin@peakngo.com">catalin@peakngo.com</a>, by phone
        at <a href="tel:+40738467902">+40738467902</a>, or by post to:
      </p>,
      <UnorderedList>
        <ListItem>Autopost SRL</ListItem>
        <ListItem>Istratoae Irinel Catalin</ListItem>
        <ListItem>Constanta</ListItem>
        <ListItem>Constanta, Constanta 900005</ListItem>
        <ListItem>Romania</ListItem>
      </UnorderedList>,
    ],
  },
  {
    title:
      '15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
    text: [
      <p>
        Based on the applicable laws of your country, you may have the right to
        request access to the personal information we collect from you, change
        that information, or delete it. To request to review, update, or delete
        your personal information, please visit:{' '}
        <Link to="https://autopost.ro/user-profile.">
          https://autopost.ro/user-profile.
        </Link>
      </p>,
    ],
  },
];

export const termsAndConditions = [
  {
    title: '1. AGREEMENT TO TERMS',
    text: [
      <p>
        These Terms and Conditions constitute a legally binding agreement made
        between you, whether personally or on behalf of an entity (“you”) and
        Autopost SRL ("Company", “we”, “us”, or “our”), concerning your access
        to and use of the https://autopost.tech website as well as any other
        media form, media channel, mobile website or mobile application related,
        linked, or otherwise connected thereto (collectively, the “Site”). We
        are registered in Romania and have our registered office at Constanta,
        Constanta, Constanta 900005. Our VAT number is RO123456. You agree that
        by accessing the Site, you have read, understood, and agree to be bound
        by all of these Terms and Conditions, including the User Agreement
        posted on the Site, which are incorporated into these Terms and
        Conditions. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS,
        THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST
        DISCONTINUE USE IMMEDIATELY.
      </p>,
      <p>
        Supplemental terms and conditions or documents that may be posted on the
        Site from time to time are hereby expressly incorporated herein by
        reference. We reserve the right, in our sole discretion, to make changes
        or modifications to these Terms and Conditions from time to time. We
        will alert you about any changes by updating the “Last updated” date of
        these Terms and Conditions, and you waive any right to receive specific
        notice of each such change. Please ensure that you check the applicable
        Terms every time you use our Site so that you understand which Terms
        apply. You will be subject to, and will be deemed to have been made
        aware of and to have accepted, the changes in any revised Terms and
        Conditions by your continued use of the Site after the date such revised
        Terms and Conditions are posted.
      </p>,
      <p>
        The information provided on the Site is not intended for distribution to
        or use by any person or entity in any jurisdiction or country where such
        distribution or use would be contrary to law or regulation or which
        would subject us to any registration requirement within such
        jurisdiction or country. Accordingly, those persons who choose to access
        the Site from other locations do so on their own initiative and are
        solely responsible for compliance with local laws, if and to the extent
        local laws are applicable.
      </p>,
      <p>
        The Site is intended for users who are at least 18 years old. Persons
        under the age of 18 are not permitted to use or register for the Site.
      </p>,
    ],
  },
  {
    title: '2. INTELLECTUAL PROPERTY RIGHTS',
    text: [
      <p>
        Unless otherwise indicated, the Site is our proprietary property and all
        source code, databases, functionality, software, website designs, audio,
        video, text, photographs, and graphics on the Site (collectively, the
        “Content”) and the trademarks, service marks, and logos contained
        therein (the “Marks”) are owned or controlled by us or licensed to us,
        and are protected by copyright and trademark laws and various other
        intellectual property rights and unfair competition laws of the United
        States, international copyright laws, and international conventions. The
        Content and the Marks are provided on the Site “AS IS” for your
        information and personal use only. Except as expressly provided in these
        Terms and Conditions, no part of the Site and no Content or Marks may be
        copied, reproduced, aggregated, republished, uploaded, posted, publicly
        displayed, encoded, translated, transmitted, distributed, sold,
        licensed, or otherwise exploited for any commercial purpose whatsoever,
        without our express prior written permission.
      </p>,
      <p>
        Provided that you are eligible to use the Site, you are granted a
        limited license to access and use the Site and to download or print a
        copy of any portion of the Content to which you have properly gained
        access solely for your personal, non-commercial use. We reserve all
        rights not expressly granted to you in and to the Site, the Content and
        the Marks.
      </p>,
    ],
  },
  {
    title: '3. USER REPRESENTATIONS',
    text: [
      <p>By using the Site, you represent and warrant that:</p>,
      <UnorderedList>
        <ListItem>
          all registration information you submit will be true, accurate,
          current, and complete;
        </ListItem>
        <ListItem>
          you will maintain the accuracy of such information and promptly update
          such registration information as necessary;
        </ListItem>
        <ListItem>
          you have the legal capacity and you agree to comply with these Terms
          and Conditions;
        </ListItem>
        <ListItem>
          you are not a minor in the jurisdiction in which you reside;
        </ListItem>
        <ListItem>
          you will not access the Site through automated or non-human means,
          whether through a bot, script or otherwise;
        </ListItem>
        <ListItem>
          you will not use the Site for any illegal or unauthorized purpose; and
        </ListItem>
        <ListItem>
          your use of the Site will not violate any applicable law or
          regulation. If you provide any information that is untrue, inaccurate,
          not current, or incomplete, we have the right to suspend or terminate
          your account and refuse any and all current or future use of the Site
          (or any portion thereof).
        </ListItem>
      </UnorderedList>,
    ],
  },
  {
    title: '4. USER REGISTRATION',
    text: [
      <p>
        You may be required to register with the Site. You agree to keep your
        password confidential and will be responsible for all use of your
        account and password. We reserve the right to remove, reclaim, or change
        a username you select if we determine, in our sole discretion, that such
        username is inappropriate, obscene, or otherwise objectionable.{' '}
      </p>,
    ],
  },
  {
    title: '5. FEES AND PAYMENT',
    text: [
      <p></p>,
      <UnorderedList>
        <ListItem>Visa</ListItem>
        <ListItem>Mastercard</ListItem>
        <ListItem>PayPal</ListItem>
      </UnorderedList>,
      <p>
        You may be required to purchase or pay a fee to access some of our
        services. You agree to provide current, complete, and accurate purchase
        and account information for all purchases made via the Site. You further
        agree to promptly update account and payment information, including
        email address, payment method, and payment card expiration date, so that
        we can complete your transactions and contact you as needed. We bill you
        through an online billing account for purchases made via the Site. Sales
        tax will be added to the price of purchases as deemed required by us. We
        may change prices at any time. All payments shall be in Euros.
      </p>,
      <p>
        You agree to pay all charges or fees at the prices then in effect for
        your purchases, and you authorize us to charge your chosen payment
        provider for any such amounts upon making your purchase. If your
        purchase is subject to recurring charges, then you consent to our
        charging your payment method on a recurring basis without requiring your
        prior approval for each recurring charge, until you notify us of your
        cancellation.
      </p>,
      <p>
        We reserve the right to correct any errors or mistakes in pricing, even
        if we have already requested or received payment. We also reserve the
        right to refuse any order placed through the Site.
      </p>,
    ],
  },
  {
    title: '6. FREE TRIAL',
    text: [
      <p>
        We offer a 21-day free trial to new users who register with the Site.
        The account will not be charged and the subscription will be suspended
        until upgraded to a paid version at the end of the free trial.
      </p>,
    ],
  },
  {
    title: '7. CANCELLATION',
    text: [
      <p>
        All purchases are non-refundable. You can cancel your subscription at
        any time by logging into your account or contacting us using the contact
        information provided below. Your cancellation will take effect at the
        end of the current paid term.
      </p>,
      <p>
        If you are unsatisfied with our services, please email us at
        contact@autopost.tech or call us at +40738467902.
      </p>,
    ],
  },
  {
    title: '8. PROHIBITED ACTIVITIES',
    text: [
      <p>
        You may not access or use the Site for any purpose other than that for
        which we make the Site available. The Site may not be used in connection
        with any commercial endeavors except those that are specifically
        endorsed or approved by us.
      </p>,
      <p>As a user of the Site, you agree not to:</p>,
      <HStack>
        <UnorderedList>
          <ListItem>
            Systematically retrieve data or other content from the Site to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </ListItem>
          <ListItem>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </ListItem>
          <ListItem>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Site, including features that prevent or restrict
            the use or copying of any Content or enforce limitations on the use
            of the Site and/or the Content contained therein.
          </ListItem>
          <ListItem>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Site.
          </ListItem>
          <ListItem>
            Use any information obtained from the Site in order to harass,
            abuse, or harm another person.
          </ListItem>
          <ListItem>
            Make improper use of our support services or submit false reports of
            abuse or misconduct.
          </ListItem>
          <ListItem>
            Use the Site in a manner inconsistent with any applicable laws or
            regulations.
          </ListItem>
          <ListItem>
            Engage in unauthorized framing of or linking to the Site.
          </ListItem>
          <ListItem>
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party’s uninterrupted use and enjoyment of the
            Site or modifies, impairs, disrupts, alters, or interferes with the
            use, features, functions, operation, or maintenance of the Site.
          </ListItem>
          <ListItem>
            Engage in any automated use of the system, such as using scripts to
            send comments or messages, or using any data mining, robots, or
            similar data gathering and extraction tools.
          </ListItem>
          <ListItem>
            Delete the copyright or other proprietary rights notice from any
            Content.
          </ListItem>
          <ListItem>
            Attempt to impersonate another user or person or use the username of
            another user.
          </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or
            other similar devices (sometimes referred to as “spyware” or
            “passive collection mechanisms” or “pcms”).
          </ListItem>
          <ListItem>
            Interfere with, disrupt, or create an undue burden on the Site or
            the networks or services connected to the Site.
          </ListItem>
          <ListItem>
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Site to you.
          </ListItem>
          <ListItem>
            Attempt to bypass any measures of the Site designed to prevent or
            restrict access to the Site, or any portion of the Site.
          </ListItem>
          <ListItem>
            Copy or adapt the Site’s software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.
          </ListItem>
          <ListItem>
            Except as permitted by applicable law, decipher, decompile,
            disassemble, or reverse engineer any of the software comprising or
            in any way making up a part of the Site.
          </ListItem>
          <ListItem>
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Site, or using
            or launching any unauthorized script or other software.
          </ListItem>
          <ListItem>
            Use a buying agent or purchasing agent to make purchases on the
            Site.
          </ListItem>
          <ListItem>
            Make any unauthorized use of the Site, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </ListItem>
          <ListItem>
            Use the Site as part of any effort to compete with us or otherwise
            use the Site and/or the Content for any revenue-generating endeavor
            or commercial enterprise.
          </ListItem>
          <ListItem>Sell or otherwise transfer your profile.</ListItem>
        </UnorderedList>
      </HStack>,
    ],
  },
  {
    title: '9. USER GENERATED CONTRIBUTIONS',
    text: [
      <p>
        The Site does not offer users to submit or post content. We may provide
        you with the opportunity to create, submit, post, display, transmit,
        perform, publish, distribute, or broadcast content and materials to us
        or on the Site, including but not limited to text, writings, video,
        audio, photographs, graphics, comments, suggestions, or personal
        information or other material (collectively, "Contributions").
        Contributions may be viewable by other users of the Site and through
        third-party websites. As such, any Contributions you transmit may be
        treated in accordance with the Site Privacy Policy.
      </p>,
      <p>
        When you create or make available any Contributions, you thereby
        represent and warrant that:
      </p>,
      <HStack>
        <UnorderedList>
          <ListItem>
            The creation, distribution, transmission, public display, or
            performance, and the accessing, downloading, or copying of your
            Contributions do not and will not infringe the proprietary rights,
            including but not limited to the copyright, patent, trademark, trade
            secret, or moral rights of any third party.
          </ListItem>
          <ListItem>
            You are the creator and owner of or have the necessary licenses,
            rights, consents, releases, and permissions to use and to authorize
            us, the Site, and other users of the Site to use your Contributions
            in any manner contemplated by the Site and these Terms and
            Conditions.
          </ListItem>
          <ListItem>
            You have the written consent, release, and/or permission of each and
            every identifiable individual person in your Contributions to use
            the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions in any
            manner contemplated by the Site and these Terms and Conditions.
          </ListItem>
          <ListItem>
            Your Contributions are not false, inaccurate, or misleading.
          </ListItem>
          <ListItem>
            Your Contributions are not unsolicited or unauthorized advertising,
            promotional materials, pyramid schemes, chain letters, spam, mass
            mailings, or other forms of solicitation.
          </ListItem>
          <ListItem>
            Your Contributions are not obscene, lewd, lascivious, filthy,
            violent, harassing, libelous, slanderous, or otherwise objectionable
            (as determined by us).
          </ListItem>
          <ListItem>
            Your Contributions do not ridicule, mock, disparage, intimidate, or
            abuse anyone.
          </ListItem>
        </UnorderedList>

        <UnorderedList>
          <ListItem>
            Your Contributions are not used to harass or threaten (in the legal
            sense of those terms) any other person and to promote violence
            against a specific person or class of people.
          </ListItem>
          <ListItem>
            Your Contributions do not violate any applicable law, regulation, or
            rule.
          </ListItem>
          <ListItem>
            Your Contributions do not violate the privacy or publicity rights of
            any third party.
          </ListItem>
          <ListItem>
            Your Contributions do not violate any applicable law concerning
            child pornography, or otherwise intended to protect the health or
            well-being of minors.
          </ListItem>
          <ListItem>
            Your Contributions do not include any offensive comments that are
            connected to race, national origin, gender, sexual preference, or
            physical handicap.
          </ListItem>
          <ListItem>
            Your Contributions do not otherwise violate, or link to material
            that violates, any provision of these Terms and Conditions, or any
            applicable law or regulation.
          </ListItem>
        </UnorderedList>
      </HStack>,
      <p>
        Any use of the Site in violation of the foregoing violates these Terms
        and Conditions and may result in, among other things, termination or
        suspension of your rights to use the Site.
      </p>,
    ],
  },
  {
    title: '10. CONTRIBUTION LICENSE',
    text: [
      <p>
        You and the Site agree that we may access, store, process, and use any
        information and personal data that you provide following the terms of
        the Privacy Policy and your choices (including settings).
      </p>,
      <p>
        By submitting suggestions or other feedback regarding the Site, you
        agree that we can use and share such feedback for any purpose without
        compensation to you.
      </p>,
      <p>
        We do not assert any ownership over your Contributions. You retain full
        ownership of all of your Contributions and any intellectual property
        rights or other proprietary rights associated with your Contributions.
        We are not liable for any statements or representations in your
        Contributions provided by you in any area on the Site. You are solely
        responsible for your Contributions to the Site and you expressly agree
        to exonerate us from any and all responsibility and to refrain from any
        legal action against us regarding your Contributions.
      </p>,
    ],
  },
  {
    title: '11. GUIDELINES FOR REVIEWS',
    text: [
      <p>
        We may provide you areas on the Site to leave reviews or ratings. When
        posting a review, you must comply with the following criteria: (1) you
        should have firsthand experience with the person/entity being reviewed;
        (2) your reviews should not contain offensive profanity, or abusive,
        racist, offensive, or hate language; (3) your reviews should not contain
        discriminatory references based on religion, race, gender, national
        origin, age, marital status, sexual orientation, or disability; (4) your
        reviews should not contain references to illegal activity; (5) you
        should not be affiliated with competitors if posting negative reviews;
        (6) you should not make any conclusions as to the legality of conduct;
        (7) you may not post any false or misleading statements; and (8) you may
        not organize a campaign encouraging others to post reviews, whether
        positive or negative.{' '}
      </p>,
      <p>
        We may accept, reject, or remove reviews in our sole discretion. We have
        absolutely no obligation to screen reviews or to delete reviews, even if
        anyone considers reviews objectionable or inaccurate. Reviews are not
        endorsed by us, and do not necessarily represent our opinions or the
        views of any of our affiliates or partners. We do not assume liability
        for any review or for any claims, liabilities, or losses resulting from
        any review. By posting a review, you hereby grant to us a perpetual,
        nonexclusive, worldwide, royalty-free, fully-paid, assignable, and
        sublicensable right and license to reproduce, modify, translate,
        transmit by any means, display, perform, and/or distribute all content
        relating to reviews.{' '}
      </p>,
    ],
  },
  {
    title: '12. SOCIAL MEDIA',
    text: [
      <p>
        As part of the functionality of the Site, you may link your account with
        online accounts you have with third-party service providers (each such
        account, a “Third-Party Account”) by either: (1) providing your
        Third-Party Account login information through the Site; or (2) allowing
        us to access your Third-Party Account, as is permitted under the
        applicable terms and conditions that govern your use of each Third-Party
        Account. You represent and warrant that you are entitled to disclose
        your Third-Party Account login information to us and/or grant us access
        to your Third-Party Account, without breach by you of any of the terms
        and conditions that govern your use of the applicable Third-Party
        Account, and without obligating us to pay any fees or making us subject
        to any usage limitations imposed by the third-party service provider of
        the Third-Party Account. By granting us access to any Third-Party
        Accounts, you understand that (1) we may access, make available, and
        store (if applicable) any content that you have provided to and stored
        in your Third-Party Account (the “Social Network Content”) so that it is
        available on and through the Site via your account, including without
        limitation any friend lists and (2) we may submit to and receive from
        your Third-Party Account additional information to the extent you are
        notified when you link your account with the Third-Party Account.
        Depending on the Third-Party Accounts you choose and subject to the
        privacy settings that you have set in such Third-Party Accounts,
        personally identifiable information that you post to your ThirdParty
        Accounts may be available on and through your account on the Site.
        Please note that if a Third-Party Account or associated service becomes
        unavailable or our access to such Third-Party Account is terminated by
        the third-party service provider, then Social Network Content may no
        longer be available on and through the Site. You will have the ability
        to disable the connection between your account on the Site and your
        Third-Party Accounts at any time. PLEASE NOTE THAT YOUR RELATIONSHIP
        WITH THE THIRD-PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY
        ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY
        SERVICE PROVIDERS. We make no effort to review any Social Network
        Content for any purpose, including but not limited to, for accuracy,
        legality, or non-infringement, and we are not responsible for any Social
        Network Content. You acknowledge and agree that we may access your email
        address book associated with a Third-Party Account and your contacts
        list stored on your mobile device or tablet computer solely for purposes
        of identifying and informing you of those contacts who have also
        registered to use the Site. You can deactivate the connection between
        the Site and your Third-Party Account by contacting us using the contact
        information below or through your account settings (if applicable). We
        will attempt to delete any information stored on our servers that was
        obtained through such Third-Party Account, except the username and
        profile picture that become associated with your account.
      </p>,
    ],
  },
  {
    title: '13. SUBMISSIONS',
    text: [
      <p>
        You acknowledge and agree that any questions, comments, suggestions,
        ideas, feedback, or other information regarding the Site ("Submissions")
        provided by you to us are non-confidential and shall become our sole
        property. We shall own exclusive rights, including all intellectual
        property rights, and shall be entitled to the unrestricted use and
        dissemination of these Submissions for any lawful purpose, commercial or
        otherwise, without acknowledgment or compensation to you. You hereby
        waive all moral rights to any such Submissions, and you hereby warrant
        that any such Submissions are original with you or that you have the
        right to submit such Submissions. You agree there shall be no recourse
        against us for any alleged or actual infringement or misappropriation of
        any proprietary right in your Submissions.
      </p>,
    ],
  },
  {
    title: '14. THIRD-PARTY WEBSITES AND CONTENT',
    text: [
      <p>
        The Site may contain (or you may be sent via the Site) links to other
        websites ("ThirdParty Websites") as well as articles, photographs, text,
        graphics, pictures, designs, music, sound, video, information,
        applications, software, and other content or items belonging to or
        originating from third parties ("Third-Party Content"). Such Third-Party
        Websites and Third-Party Content are not investigated, monitored, or
        checked for accuracy, appropriateness, or completeness by us, and we are
        not responsible for any Third-Party Websites accessed through the Site
        or any Third-Party Content posted on, available through, or installed
        from the Site, including the content, accuracy, offensiveness, opinions,
        reliability, privacy practices, or other policies of or contained in the
        Third-Party Websites or the Third-Party Content. Inclusion of, linking
        to, or permitting the use or installation of any Third-Party Websites or
        any Third-Party Content does not imply approval or endorsement thereof
        by us. If you decide to leave the Site and access the Third-Party
        Websites or to use or install any Third-Party Content, you do so at your
        own risk, and you should be aware these Terms and Conditions no longer
        govern. You should review the applicable terms and policies, including
        privacy and data gathering practices, of any website to which you
        navigate from the Site or relating to any applications you use or
        install from the Site. Any purchases you make through Third-Party
        Websites will be through other websites and from other companies, and we
        take no responsibility whatsoever in relation to such purchases which
        are exclusively between you and the applicable third party. You agree
        and acknowledge that we do not endorse the products or services offered
        on Third-Party Websites and you shall hold us harmless from any harm
        caused by your purchase of such products or services. Additionally, you
        shall hold us harmless from any losses sustained by you or harm caused
        to you relating to or resulting in any way from any Third-Party Content
        or any contact with Third-Party Websites.
      </p>,
    ],
  },
  {
    title: '15. SITE MANAGEMENT',
    text: [
      <p>
        We reserve the right, but not the obligation, to: (1) monitor the Site
        for violations of these Terms and Conditions; (2) take appropriate legal
        action against anyone who, in our sole discretion, violates the law or
        these Terms and Conditions, including without limitation, reporting such
        user to law enforcement authorities; (3) in our sole discretion and
        without limitation, refuse, restrict access to, limit the availability
        of, or disable (to the extent technologically feasible) any of your
        Contributions or any portion thereof; (4) in our sole discretion and
        without limitation, notice, or liability, to remove from the Site or
        otherwise disable all files and content that are excessive in size or
        are in any way burdensome to our systems; and (5) otherwise manage the
        Site in a manner designed to protect our rights and property and to
        facilitate the proper functioning of the Site.
      </p>,
    ],
  },
  {
    title: '16. PRIVACY POLICY',
    text: [
      <p>
        We care about data privacy and security. Please review our Privacy
        Policy:{' '}
        <Link to="https://autopost.tech/gdpr">https://autopost.tech/gdpr</Link>.
        By using the Site, you agree to be bound by our Privacy Policy, which is
        incorporated into these Terms and Conditions. Please be advised the Site
        is hosted in Romania. If you access the Site from any other region of
        the world with laws or other requirements governing personal data
        collection, use, or disclosure that differ from applicable laws in
        Romania, then through your continued use of the Site, you are
        transferring your data to Romania, and you agree to have your data
        transferred to and processed in Romania.
      </p>,
    ],
  },
  {
    title: '17. TERM AND TERMINATION',
    text: [
      <p>
        These Terms and Conditions shall remain in full force and effect while
        you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS
        AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
        WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE
        (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON
        OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
        REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS AND
        CONDITIONS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR
        USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT
        OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE
        DISCRETION. If we terminate or suspend your account for any reason, you
        are prohibited from registering and creating a new account under your
        name, a fake or borrowed name, or the name of any third party, even if
        you may be acting on behalf of the third party. In addition to
        terminating or suspending your account, we reserve the right to take
        appropriate legal action, including without limitation pursuing civil,
        criminal, and injunctive redress.
      </p>,
    ],
  },
  {
    title: '18. MODIFICATIONS AND INTERRUPTIONS',
    text: [
      <p>
        We reserve the right to change, modify, or remove the contents of the
        Site at any time or for any reason at our sole discretion without
        notice. However, we have no obligation to update any information on our
        Site. We also reserve the right to modify or discontinue all or part of
        the Site without notice at any time. We will not be liable to you or any
        third party for any modification, price change, suspension, or
        discontinuance of the Site. We cannot guarantee the Site will be
        available at all times. We may experience hardware, software, or other
        problems or need to perform maintenance related to the Site, resulting
        in interruptions, delays, or errors. We reserve the right to change,
        revise, update, suspend, discontinue, or otherwise modify the Site at
        any time or for any reason without notice to you. You agree that we have
        no liability whatsoever for any loss, damage, or inconvenience caused by
        your inability to access or use the Site during any downtime or
        discontinuance of the Site. Nothing in these Terms and Conditions will
        be construed to obligate us to maintain and support the Site or to
        supply any corrections, updates, or releases in connection therewith.
      </p>,
    ],
  },
  {
    title: '19. GOVERNING LAW',
    text: [
      <p>
        These conditions are governed by and interpreted following the laws of
        Romania, and the use of the United Nations Convention of Contracts for
        the International Sale of Goods is expressly excluded. If your habitual
        residence is in the EU, and you are a consumer, you additionally possess
        the protection provided to you by obligatory provisions of the law of
        your country of residence. Autopost SRL and yourself both agree to
        submit to the non-exclusive jurisdiction of the courts of Constanta,
        which means that you may make a claim to defend your consumer protection
        rights in regards to these Conditions of Use in Romania, or in the EU
        country in which you reside.
      </p>,
    ],
  },
  {
    title: '20. DISPUTE RESOLUTION',
    text: [
      <p>
        The European Commission provides an online dispute resolution platform,
        which you can access here:{' '}
        <a
          target="_blank"
          aria-label="Europa"
          rel="noreferrer"
          href="https://ec.europa.eu/consumers/odr"
        >
          https://ec.europa.eu/consumers/odr
        </a>
        . If you would like to bring this subject to our attention, please
        contact us.
      </p>,
    ],
  },
  {
    title: '21. CORRECTIONS',
    text: [
      <p>
        There may be information on the Site that contains typographical errors,
        inaccuracies, or omissions, including descriptions, pricing,
        availability, and various other information. We reserve the right to
        correct any errors, inaccuracies, or omissions and to change or update
        the information on the Site at any time, without prior notice.
      </p>,
    ],
  },
  {
    title: '22. DISCLAIMER',
    text: [
      <p>
        THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT
        YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE
        FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
        IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING,
        WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
        FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR
        REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT
        OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO
        LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
        INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY
        DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE
        OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS
        AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
        STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
        FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH
        MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6)
        ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
        DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT
        POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT
        WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR
        SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY
        HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN
        ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY
        WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
        THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A
        PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD
        USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.{' '}
      </p>,
    ],
  },
  {
    title: '23. LIMITATIONS OF LIABILITY',
    text: [
      <p>
        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO
        YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
        EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST
        PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
        USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
        DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR
        LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF
        THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY
        YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION
        ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW
        LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF
        CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
        DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
        ADDITIONAL RIGHTS.
      </p>,
    ],
  },
  {
    title: '24. INDEMNIFICATION',
    text: [
      <p>
        You agree to defend, indemnify, and hold us harmless, including our
        subsidiaries, affiliates, and all of our respective officers, agents,
        partners, and employees, from and against any loss, damage, liability,
        claim, or demand, including reasonable attorneys’ fees and expenses,
        made by any third party due to or arising out of: (1) use of the Site;
        (2) breach of these Terms and Conditions; (3) any breach of your
        representations and warranties set forth in these Terms and Conditions;
        (4) your violation of the rights of a third party, including but not
        limited to intellectual property rights; or (5) any overt harmful act
        toward any other user of the Site with whom you connected via the Site.
        Notwithstanding the foregoing, we reserve the right, at your expense, to
        assume the exclusive defense and control of any matter for which you are
        required to indemnify us, and you agree to cooperate, at your expense,
        with our defense of such claims. We will use reasonable efforts to
        notify you of any such claim, action, or proceeding which is subject to
        this indemnification upon becoming aware of it.
      </p>,
    ],
  },
  {
    title: '25. USER DATA',
    text: [
      <p>
        We will maintain certain data that you transmit to the Site for the
        purpose of managing the performance of the Site, as well as data
        relating to your use of the Site. Although we perform regular routine
        backups of data, you are solely responsible for all data that you
        transmit or that relates to any activity you have undertaken using the
        Site. You agree that we shall have no liability to you for any loss or
        corruption of any such data, and you hereby waive any right of action
        against us arising from any such loss or corruption of such data.
      </p>,
    ],
  },
  {
    title: '26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
    text: [
      <p>
        Visiting the Site, sending us emails, and completing online forms
        constitute electronic communications. You consent to receive electronic
        communications, and you agree that all agreements, notices, disclosures,
        and other communications we provide to you electronically, via email and
        on the Site, satisfy any legal requirement that such communication be in
        writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
        CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF
        NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY
        US OR VIA THE SITE. You hereby waive any rights or requirements under
        any statutes, regulations, rules, ordinances, or other laws in any
        jurisdiction which require an original signature or delivery or
        retention of non-electronic records, or to payments or the granting of
        credits by any means other than electronic means.
      </p>,
    ],
  },
  {
    title: '27. MISCELLANEOUS',
    text: [
      <p>
        These Terms and Conditions and any policies or operating rules posted by
        us on the Site or in respect to the Site constitute the entire agreement
        and understanding between you and us. Our failure to exercise or enforce
        any right or provision of these Terms and Conditions shall not operate
        as a waiver of such right or provision. These Terms and Conditions
        operate to the fullest extent permissible by law. We may assign any or
        all of our rights and obligations to others at any time. We shall not be
        responsible or liable for any loss, damage, delay, or failure to act
        caused by any cause beyond our reasonable control. If any provision or
        part of a provision of these Terms and Conditions is determined to be
        unlawful, void, or unenforceable, that provision or part of the
        provision is deemed severable from these Terms and Conditions and does
        not affect the validity and enforceability of any remaining provisions.
        There is no joint venture, partnership, employment or agency
        relationship created between you and us as a result of these Terms and
        Conditions or use of the Site. You agree that these Terms and Conditions
        will not be construed against us by virtue of having drafted them. You
        hereby waive any and all defenses you may have based on the electronic
        form of these Terms and Conditions and the lack of signing by the
        parties hereto to execute these Terms and Conditions.
      </p>,
    ],
  },
  {
    title: '28. CONTACT US',
    text: [
      <p>
        In order to resolve a complaint regarding the Site or to receive further
        information regarding use of the Site, please contact us at:
      </p>,
      <UnorderedList>
        <ListItem>Autopost SRL</ListItem>
        <ListItem>Constanta</ListItem>
        <ListItem>Constanta, Constanta 900005 </ListItem>
        <ListItem>Romania </ListItem>
        <ListItem>Phone: +40738467902</ListItem>
        <ListItem>
          <a href="mailto:contact@autopost.tech">contact@autopost.tech</a>
        </ListItem>
      </UnorderedList>,
    ],
  },
];
