CREATE TABLE "members" (
	"user_id" char(26) NOT NULL,
	"school_id" char(26) NOT NULL,
	"role" varchar,
	CONSTRAINT "members_user_id_school_id_pk" PRIMARY KEY("user_id","school_id")
);
--> statement-breakpoint
ALTER TABLE "members" ADD CONSTRAINT "members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "members" ADD CONSTRAINT "members_school_id_schools_id_fk" FOREIGN KEY ("school_id") REFERENCES "public"."schools"("id") ON DELETE cascade ON UPDATE cascade;