import { Module, OnModuleInit } from "@nestjs/common";
import { EncryptionService } from "../common/encryption.service";
import { WhatsAppCloudApiService } from "./services/whatsapp-cloud-api.service";
import { WhatsappEmbeddedSignupService } from "./services/whatsapp-embedded-signup.service";
import { WhatsappWebhookService } from "./services/whatsapp-webhook.service";
import { WhatsappController } from "./whatsapp.controller";
import { WhatsappWebhookController } from "./whatsapp-webhook.controller";
import { WhatsappRepository } from "./whatsapp.repository";
import { WhatsappService } from "./whatsapp.service";

@Module({
  controllers: [WhatsappController, WhatsappWebhookController],
  providers: [
    WhatsappService,
    WhatsappRepository,
    WhatsAppCloudApiService,
    WhatsappEmbeddedSignupService,
    WhatsappWebhookService,
    EncryptionService
  ],
  exports: [WhatsappService]
})
export class WhatsappModule implements OnModuleInit {
  constructor(private readonly whatsappService: WhatsappService) {}

  async onModuleInit() {
    await this.whatsappService.ensureDefaultTemplatesSeeded();
  }
}
