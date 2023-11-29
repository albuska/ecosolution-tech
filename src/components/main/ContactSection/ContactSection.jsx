import { Form } from '../../../shared/components/Form/Form';
import { Icon } from '../../../shared/components/Icon/Icon';
import { Networks } from '../../../shared/components/Networks/Networks';
import { SecondTitle } from '../../../shared/components/SecondTitle/SecondTitle';
import { Text, LinkPhone } from './ContactSection.styled';

export const ContactSection = () => {
  return (
    <section style={{ paddingBottom: 36 }}>
      <SecondTitle text="Contact us" textAlign={'center'} />
      <address>
        <Text>Phone:</Text>
        <LinkPhone href="tel:380981234567">
          <Icon
            iconName={'icon-call'}
            width={24}
            height={24}
            stroke={'#173D33'}
            fill="transparent"
          />
          38 (098) 12 34 567
        </LinkPhone>
        <LinkPhone href="tel:380931234567">
          <Icon
            iconName={'icon-call'}
            width={24}
            height={24}
            stroke={'#173D33'}
            fill="transparent"
          />
          38 (093) 12 34 567
        </LinkPhone>
        <Text>E-mail:</Text>
        <LinkPhone href="mailto:office@ecosolution.com">
          <Icon
            iconName={'icon-sms'}
            width={24}
            height={24}
            stroke={'#173D33'}
            fill="transparent"
          />
          office@ecosolution.com
        </LinkPhone>
        <Text>Address:</Text>
        <LinkPhone
          href="https://www.google.com.ua/maps/search/79005,+Ukraine,+Lvivstreet.+Shota+Rustaveli,+7/@49.8313557,24.0323843,17z/data=!3m1!4b1?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            iconName={'icon-map'}
            width={24}
            height={24}
            stroke={'#173D33'}
            fill="transparent"
          />
          79005, Ukraine, Lvivstreet. <br /> Shota Rustaveli, 7
        </LinkPhone>
        <Text>Social Networks:</Text>
        <div style={{marginTop: 20}}>
            <Networks
              fillFace="#173D33"
              fillIns="transparent"
              strokeFace="#173D33"
              strokeIns={'#173D33'}
              gap={32}
            />
        </div>
        <Form/>
      </address>
    </section>
  );
};
