import { Grid } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import TextField from './components/TextField';
import styles from './CTA.module.scss';

const CTA = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');

  return (
    <section id="cta" className={styles['cta']}>
      <div className={styles['cta-content']}>
        <div className={styles['cta-content-part']}>
          <h4>Connect With Us</h4>
          <p>Speak to a team member to learn more about the Pillar commercial real estate marketplace.</p>
        </div>
        <div className={styles['cta-content-part']}>
          <form method="POST">
            <input type="hidden" name="oid" value="00D5f000006OVNu" />
            <input type="hidden" name="retURL" value={`${baseUrl}?success=true&cta=true`} />​
            {/* <!--  ----------------------------------------------------------------------  -->
            <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
            <!--  these lines if you wish to test in debug mode.                          -->
            <input type="hidden" name="debug" value={1} />
            <input type="hidden" name="debugEmail" value="steve@pillarmarkets.com" />
            <!--  ----------------------------------------------------------------------  --> */}
            {/* the code above is for testing */}
            <Grid container spacing={2} columnSpacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="first_name"
                  label="First Name"
                  inputProps={{ maxLength: 80 }}
                  name="first_name"
                  type="text"
                  placeholder="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="last_name"
                  label="Last Name"
                  inputProps={{ maxLength: 80 }}
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="company"
                  label="Company"
                  inputProps={{ maxLength: 40 }}
                  name="company"
                  type="text"
                  placeholder="Company"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  label="Email"
                  inputProps={{ maxLength: 80 }}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ height: 'auto', color: 'white' }}
                  id="description"
                  label="Description"
                  multiline
                  rows={4}
                  name="description"
                  type="text"
                  placeholder="Description"
                />
              </Grid>
            </Grid>
            <p className={styles['small']}>
              By submitting your information, you agree to the{' '}
              <Link href="/privacy-and-cookies">privacy policy</Link> and to learn more about offers and
              promotions from Pillar.
            </p>
            {success && (
              <>
                ​<h5>Your information has been received. A team member will reach out to you soon.</h5>
                <br />
              </>
            )}
            <input className="ui-button secondary" type="submit" name="submit" value={'Submit'} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
