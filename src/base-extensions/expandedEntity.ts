import { validateOrReject } from "class-validator";
import { BaseEntity, BeforeInsert, BeforeUpdate } from "typeorm";

export class ExpandedEntity extends BaseEntity {

  @BeforeInsert()
  @BeforeUpdate()
  private validate(): Promise<void> {
    return validateOrReject(this);
  }
}