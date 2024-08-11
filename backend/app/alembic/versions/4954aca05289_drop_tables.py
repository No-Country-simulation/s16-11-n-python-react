"""drop tables

Revision ID: 4954aca05289
Revises: ab491686ec62
Create Date: 2024-07-26 22:13:49.625612

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = "4954aca05289"
down_revision: Union[str, None] = "ab491686ec62"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.drop_table("video")
    op.drop_table("course")
    op.drop_table("channel")


def downgrade() -> None:
    op.add_column("course", sa.Column("thumbnail", sa.String(), nullable=False))
