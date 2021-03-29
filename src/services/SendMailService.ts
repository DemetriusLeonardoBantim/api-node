import nodeMailer, { Transporter } from 'nodemailer';

class SendMailService {
  private client: Transporter;
  constructor() {
    nodeMailer.createTestAccount().then((account) => {
      const transporter = nodeMailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });
      this.client = transporter;
    });
  }

  async execute(to: string, subject: string, body: string) {
    const message = await this.client.sendMail({
      to,
      subject,
      html: body,
      from: 'NPS <noreplay@nps.com.br>',
    });
  }
}

export default new SendMailService();
