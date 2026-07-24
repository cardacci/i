/* ===== Imports ===== */
import type { CSSProperties } from 'react';

import {
	CATEGORY_COLORS,
	type SkillCategory,
	skillSections,
	type SkillTreeNode as SkillTreeNodeType
} from '@/utils/constants/skillTreeData';

import './skillTree.css';

/* ===== Types & Interfaces ===== */
interface SkillBranchProps {
	category: SkillCategory;
	nodes: SkillTreeNodeType[];
}

interface SkillCardProps {
	category: SkillCategory;
	tree: SkillTreeNodeType;
}

/* ===== Recursive Branch (vertical list with connectors) ===== */
const SkillBranch = ({ category, nodes }: SkillBranchProps) => {
	const colors = CATEGORY_COLORS[category];

	return (
		<ul className='skill-branch'>
			{nodes.map((node) => {
				const hasChildren = node.children && node.children.length > 0;

				return (
					<li key={node.label}>
						<div className={`skill-row ${hasChildren ? 'skill-row-group' : ''}`}>
							{node.icon && <node.icon className='skill-row-icon' size={16} style={{ color: colors.bg }} />}

							<span>{node.label}</span>
						</div>

						{hasChildren && <SkillBranch category={category} nodes={node.children!} />}
					</li>
				);
			})}
		</ul>
	);
};

/* ===== Category Card ===== */
const SkillCard = ({ category, tree }: SkillCardProps) => {
	const colors = CATEGORY_COLORS[category];

	return (
		<div
			className='skill-card'
			style={{ '--branch-color': `${colors.bg}66` } as CSSProperties}
		>
			<div
				className='skill-card-header'
				style={{ background: `linear-gradient(135deg, ${colors.bg}, ${colors.border})` }}
			>
				{tree.icon && <tree.icon size={20} />}

				<span>{tree.label}</span>
			</div>

			<div className='skill-card-body'>
				<SkillBranch category={category} nodes={tree.children ?? []} />
			</div>
		</div>
	);
};

/* ===== Skill Tree Component ===== */
const SkillTree = () => {
	return (
		<div className='skill-groups'>
			{skillSections.map((section) => (
				<SkillCard category={section.category} key={section.tree.label} tree={section.tree} />
			))}
		</div>
	);
};

/* ===== Exports ===== */
export default SkillTree;
