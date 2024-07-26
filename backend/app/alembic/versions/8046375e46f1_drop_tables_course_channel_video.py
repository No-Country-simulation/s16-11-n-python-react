"""drop tables course, channel, video

Revision ID: 8046375e46f1
Revises: ae338e9c2adc
Create Date: 2024-07-26 20:22:20.285403

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "8046375e46f1"
down_revision: Union[str, None] = "ae338e9c2adc"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_table("video")
    op.drop_table("course")
    op.drop_table("channel")


def downgrade() -> None:
    op.create_table(
        "channel",
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("channel_name", sa.String(), nullable=False),
        sa.Column("description", sa.String(), nullable=True),
        sa.Column("custom_url", sa.String(), nullable=False),
        sa.Column("country", sa.String(), nullable=False),
        sa.Column("views", sa.Integer(), nullable=True),
        sa.Column("subs", sa.Integer(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("custom_url"),
        sa.UniqueConstraint("id"),
    )
    op.create_table(
        "course",
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("title", sa.String(), nullable=False),
        sa.Column("thumbnail", sa.String(), nullable=False),
        sa.Column("description", sa.String(), nullable=True),
        sa.Column("published_at", sa.Date(), nullable=False),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("channel_id", sa.String(), nullable=True),
        sa.Column("my_courses_id", sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(
            ["channel_id"],
            ["channel.id"],
        ),
        sa.ForeignKeyConstraint(
            ["my_courses_id"],
            ["my_courses.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("id"),
    )
    op.create_table(
        "video",
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("title", sa.String(), nullable=False),
        sa.Column("description", sa.String(), nullable=True),
        sa.Column("thumbnail", sa.String(), nullable=False),
        sa.Column("published_at", sa.Date(), nullable=False),
        sa.Column("is_active", sa.Boolean(), nullable=False),
        sa.Column("course_id", sa.String(), nullable=True),
        sa.ForeignKeyConstraint(
            ["course_id"],
            ["course.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("id"),
    )
