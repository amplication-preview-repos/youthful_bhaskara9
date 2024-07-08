/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { SupporterWhereUniqueInput } from "../../supporter/base/SupporterWhereUniqueInput";
import { ReasonWhereUniqueInput } from "../../reason/base/ReasonWhereUniqueInput";

@InputType()
class DonationUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  donationDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => SupporterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupporterWhereUniqueInput)
  @IsOptional()
  @Field(() => SupporterWhereUniqueInput, {
    nullable: true,
  })
  supporter?: SupporterWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ReasonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReasonWhereUniqueInput)
  @IsOptional()
  @Field(() => ReasonWhereUniqueInput, {
    nullable: true,
  })
  reason?: ReasonWhereUniqueInput | null;
}

export { DonationUpdateInput as DonationUpdateInput };
